// eslint.config.js
import js from "@eslint/js";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettier from "eslint-config-prettier";
import globals from "globals";

export default [
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
      }
    },
    plugins: {
      "@typescript-eslint": ts,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...ts.configs.recommended.rules,
    },
  },

  // Prettier config (disables formatting rules from ESLint)
  prettier,
];
