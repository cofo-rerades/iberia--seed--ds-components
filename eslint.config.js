import { FlatCompat } from '@eslint/eslintrc';
import tsEslint from '@typescript-eslint/eslint-plugin';
import html from 'eslint-plugin-html';
import tsParser from '@typescript-eslint/parser'; // Ensure proper import
// import openWC from '@open-wc/eslint-config'; // For @open-wc configuration
import prettier from 'eslint-config-prettier';
import { includeIgnoreFile } from '@eslint/compat';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
// mimic CommonJS variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, '.gitignore');

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const config = [
  includeIgnoreFile(gitignorePath),
  // extends
  // TODO: mimic ESLintRC-style extends
  // TODO: remove this workaround when @open-wc/eslint-config migrates to V9 and use it like prettier (openWC and uncomment import)
  ...compat.extends('@open-wc/eslint-config'),
  prettier,
  {
    // Specify the files to lint
    files: ['**/*.ts'],
    // Define global variables
    languageOptions: {
      parser: tsParser,
      globals: {
        Story: 'readonly',
      },
    },
    // Add plugins
    plugins: {
      '@typescript-eslint': tsEslint,
    },
    // Define rules
    rules: {
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: ['**/*.test.ts', '**/*.config.js', '**/*.spec.js'],
        },
      ],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error'],
      'import/no-unresolved': 'off',
      'import/extensions': [
        'error',
        'always',
        {
          ignorePackages: true,
        },
      ],
    },
    // Extend configurations
    linterOptions: {
      noInlineConfig: false,
      reportUnusedDisableDirectives: true,
    },
  },
  {
    files: ['**/*.html'],
    plugins: { html },
    rules: {
      // Define additional rules for HTML if needed
    },
  },
];

export default config;
