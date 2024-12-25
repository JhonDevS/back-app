import eslint from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tseslintParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  eslint.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],
    ignores: ['dist/**/*', 'node_modules/**/*'],
    plugins: {
      '@typescript-eslint': tseslint,
      'prettier': prettier
    },
    languageOptions: {
      parser: tseslintParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    rules: {
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'prefer-const': 'error',
      'no-console': ['error', {
        'allow': ['warn', 'error', 'info']
      }],
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      'no-trailing-spaces': 'error',
      'eol-last': ['error', 'always'],
      'prettier/prettier': ['error', {
        'semi': true,
        'singleQuote': true,
        'tabWidth': 2,
        'printWidth': 80,
        'trailingComma': 'none'
      }]
    }
  },
  eslintConfigPrettier
];