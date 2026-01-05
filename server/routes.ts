import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { createRequire } from "module";
import { storage } from "./storage";
import { parseInvoice } from "./invoice-parser";
import multer from "multer";
import { promises as fs } from "fs";
import * as XLSX from "xlsx";

// pdf-parse doesn't have ESM exports, use createRequire
const require = createRequire(import.meta.url);
const pdfParse = require("pdf-parse");

// Configure multer for file uploads
const upload = multer({
  dest: "/tmp/uploads/",
  limits: { fileSize: 20 * 1024 * 1024 }, // 20MB max
  fileFilter: (_req, file, cb) => {
    const allowedTypes = [
      "application/pdf",
      "text/csv",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "application/vnd.ms-excel",
    ];
    const allowedExts = [".pdf", ".csv", ".xlsx", ".xls"];
    const ext = "." + file.originalname.split(".").pop()?.toLowerCase();
    
    if (allowedTypes.includes(file.mimetype) || allowedExts.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error("Unsupported file type"));
    }
  },
});

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Invoice analysis endpoint
  app.post("/api/invoice-analysis", upload.single("invoice"), async (req: Request, res: Response) => {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const filePath = req.file.path;
    const fileName = req.file.originalname;
    
    try {
      const ext = fileName.split(".").pop()?.toLowerCase();
      
      let fileContent: string;
      
      if (ext === "csv") {
        fileContent = await fs.readFile(filePath, "utf-8");
      } else if (ext === "xlsx" || ext === "xls") {
        const workbook = XLSX.readFile(filePath);
        const sheets: string[] = [];
        for (const sheetName of workbook.SheetNames) {
          const sheet = workbook.Sheets[sheetName];
          const csv = XLSX.utils.sheet_to_csv(sheet);
          sheets.push(`=== Sheet: ${sheetName} ===\n${csv}`);
        }
        fileContent = sheets.join("\n\n");
      } else if (ext === "pdf") {
        const buffer = await fs.readFile(filePath);
        const pdfData = await pdfParse(buffer);
        fileContent = pdfData.text;
        
        if (!fileContent || fileContent.trim().length < 50) {
          fileContent = `[PDF file: ${fileName}]\nExtracted text was minimal or empty. This may be a scanned/image-based PDF.\nFile size: ${buffer.length} bytes\nPages: ${pdfData.numpages || 'unknown'}`;
        }
      } else {
        fileContent = await fs.readFile(filePath, "utf-8");
      }

      // Parse the invoice with AI
      const result = await parseInvoice(fileContent, fileName);
      
      res.json(result);
    } catch (error) {
      console.error("Invoice analysis error:", error);
      res.status(500).json({ 
        error: error instanceof Error ? error.message : "Failed to analyze invoice" 
      });
    } finally {
      // Clean up the uploaded file
      await fs.unlink(filePath).catch(() => {});
    }
  });

  return httpServer;
}
