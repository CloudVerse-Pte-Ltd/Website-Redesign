import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { parseInvoice } from "./invoice-parser";
import multer from "multer";
import { promises as fs } from "fs";
import * as XLSX from "xlsx";

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

    try {
      const filePath = req.file.path;
      const fileName = req.file.originalname;
      const ext = fileName.split(".").pop()?.toLowerCase();
      
      let fileContent: string;
      
      if (ext === "csv") {
        // Read CSV directly
        fileContent = await fs.readFile(filePath, "utf-8");
      } else if (ext === "xlsx" || ext === "xls") {
        // Parse Excel file
        const workbook = XLSX.readFile(filePath);
        const sheets: string[] = [];
        for (const sheetName of workbook.SheetNames) {
          const sheet = workbook.Sheets[sheetName];
          const csv = XLSX.utils.sheet_to_csv(sheet);
          sheets.push(`=== Sheet: ${sheetName} ===\n${csv}`);
        }
        fileContent = sheets.join("\n\n");
      } else if (ext === "pdf") {
        // For PDF, we'll read the raw buffer and send to AI
        // The AI can extract text from the content description
        const buffer = await fs.readFile(filePath);
        fileContent = `[PDF file with ${buffer.length} bytes - filename: ${fileName}]\n\nNote: This is a PDF invoice. Extract information based on typical cloud provider invoice formats (AWS, Azure, GCP). Look for billing periods, total amounts, service breakdowns, and resource details.`;
      } else {
        fileContent = await fs.readFile(filePath, "utf-8");
      }

      // Clean up the uploaded file
      await fs.unlink(filePath).catch(() => {});

      // Parse the invoice with AI
      const result = await parseInvoice(fileContent, fileName);
      
      res.json(result);
    } catch (error) {
      console.error("Invoice analysis error:", error);
      res.status(500).json({ 
        error: error instanceof Error ? error.message : "Failed to analyze invoice" 
      });
    }
  });

  return httpServer;
}
