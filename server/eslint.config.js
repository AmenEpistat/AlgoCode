import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import ts from "@typescript-eslint/eslint-plugin";
import prettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  {
    files: ["**/*.{js,ts}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: tsParser,
    },
    plugins: {
      "@typescript-eslint": ts,
      prettier,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...ts.configs.recommended.rules,

      "prettier/prettier": [
        "error",
        {
          singleQuote: true,
          semi: true,
          trailingComma: "es5",
          bracketSpacing: true,
          arrowParens: "always",
          printWidth: 80,
          tabWidth: 4,
        },
      ],

      quotes: ["error", "single"],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "no-console": "off",
    },
  },
  eslintConfigPrettier,
  {
    ignores: ["dist/**", "node_modules/**"],
  },
];
