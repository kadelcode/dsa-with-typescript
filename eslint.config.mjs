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
      // Unused variables (yellow warnings)
      "@typescript-eslint/no-unused-vars": "warn",
      "no-unused-vars": "off",

      // Type checking rules - these will complain about missing types
      "@typescript-eslint/explicit-function-return-type": "warn",
      "@typescript-eslint/explicit-module-boundary-types": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-inferrable-types": "warn",
      "@typescript-eslint/typedef": [
        "warn",
        {
          "arrowParameter": true,
          "variableDeclaration": true,
          "memberVariableDeclaration": true,
          "parameter": true,
          "propertyDeclaration": true,
          "variableDeclarationIgnoreFunction": true,
        }
      ]
    },
  },

  // Prettier config (disables formatting rules from ESLint)
  prettier,
];
