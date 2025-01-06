import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Change typescript no-unused-vars to warning
      "@typescript-eslint/no-unused-vars": "warn",
      
      // Allow unescaped entities in JSX
      "react/no-unescaped-entities": "warn",
      
      // Set react-hooks/exhaustive-deps to warning
      "react-hooks/exhaustive-deps": "warn",
      
      // Additional helpful rules
      "@typescript-eslint/no-explicit-any": "warn",
      "no-console": "warn",
    },
    // Optional: ignore specific files or directories
    ignorePatterns: [
      "node_modules/",
      ".next/",
      "out/",
      "public/",
    ],
  },
];

export default eslintConfig;