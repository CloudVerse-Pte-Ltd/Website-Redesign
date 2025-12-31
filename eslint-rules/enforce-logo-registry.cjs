/**
 * Enforce theme-aware logos via central registry.
 *
 * Rules:
 * 1) Disallow any <img src="https://..."> or <img src="http://..."> (logos must be local)
 * 2) Disallow string literals containing "/logos/" anywhere EXCEPT in:
 *    - client/src/config/logos.ts (the registry)
 * 3) Disallow CSS invert/filter hacks in style objects and className strings
 */

const path = require("path");

function isRegistryFile(filename) {
  const norm = filename.split(path.sep).join("/");
  return norm.endsWith("/client/src/config/logos.ts") || norm.endsWith("/client/src/config/logos.tsx");
}

function getStringValue(node) {
  if (!node) return null;
  if (node.type === "Literal" && typeof node.value === "string") return node.value;
  if (node.type === "TemplateLiteral" && node.quasis?.length === 1) return node.quasis[0].value.cooked;
  return null;
}

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Force logo usage via theme-aware registry (no inline logo paths, no external urls, no invert hacks).",
    },
    schema: [],
    messages: {
      noExternalImgSrc:
        "Do not use external URLs in <img src>. Logos must come from local assets via the logo registry.",
      noDirectLogoPath:
        "Do not reference '/logos/…' directly. Import from the logo registry: client/src/config/logos.ts",
      noLogoFilterHack:
        "Do not use invert/brightness/contrast filter hacks for logos. Use theme-aware SVG variants + logo container.",
    },
  },

  create(context) {
    const filename = context.getFilename();
    const isRegistry = isRegistryFile(filename);

    function checkString(node, value) {
      if (!value) return;

      if (!isRegistry && value.includes("/logos/")) {
        context.report({ node, messageId: "noDirectLogoPath" });
      }

      const lower = value.toLowerCase();
      const suspicious =
        lower.includes("invert") ||
        lower.includes("filter:") ||
        lower.includes("brightness") ||
        lower.includes("contrast");

      if (suspicious) {
        context.report({ node, messageId: "noLogoFilterHack" });
      }
    }

    return {
      JSXOpeningElement(node) {
        if (node.name?.name !== "img") return;

        const srcAttr = node.attributes?.find(
          (a) => a.type === "JSXAttribute" && a.name?.name === "src"
        );
        if (!srcAttr) return;

        if (srcAttr.value && srcAttr.value.type === "Literal") {
          const val = srcAttr.value.value;
          if (typeof val === "string" && (val.startsWith("http://") || val.startsWith("https://"))) {
            context.report({ node: srcAttr, messageId: "noExternalImgSrc" });
          }
          checkString(srcAttr.value, val);
        }

        if (srcAttr.value && srcAttr.value.type === "JSXExpressionContainer") {
          const expr = srcAttr.value.expression;
          const str = getStringValue(expr);
          if (str && (str.startsWith("http://") || str.startsWith("https://"))) {
            context.report({ node: srcAttr, messageId: "noExternalImgSrc" });
          }
          checkString(expr, str);
        }
      },

      Literal(node) {
        if (typeof node.value === "string") checkString(node, node.value);
      },

      TemplateLiteral(node) {
        const str = getStringValue(node);
        checkString(node, str);
      },
    };
  },
};
