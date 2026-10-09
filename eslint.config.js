import eslint from '@eslint/js'
import { defineConfig, globalIgnores } from 'eslint/config'
import importPlugin from 'eslint-plugin-import'
import prettierPluginRecommended from 'eslint-plugin-prettier/recommended'
import securityPlugin from 'eslint-plugin-security'
import sonarjsPlugin from 'eslint-plugin-sonarjs'
import unicornPlugin from 'eslint-plugin-unicorn'
import unusedImportsPlugin from 'eslint-plugin-unused-imports'
import tseslint from 'typescript-eslint'

const typescriptFiles = ['src/**/*.ts', '*.config.ts']

export default defineConfig([
  globalIgnores(['node_modules/**', 'eslint.config.mjs']),

  eslint.configs.recommended,

  {
    files: typescriptFiles,

    extends: [
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
      sonarjsPlugin.configs.recommended,
      securityPlugin.configs.recommended,
    ],

    plugins: {
      import: importPlugin,
      unicorn: unicornPlugin,
      'unused-imports': unusedImportsPlugin,
    },

    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['*.config.ts'],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },

    rules: {
      '@typescript-eslint/no-unused-vars': 'off',

      'unused-imports/no-unused-imports': 'error',

      'unused-imports/no-unused-vars': [
        'error',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      'security/detect-object-injection': 'off',
      'sonarjs/no-duplicate-string': 'warn',
      'sonarjs/no-identical-functions': 'warn',
      'sonarjs/no-identical-expressions': 'warn',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE'],
        },
        {
          selector: 'function',
          format: ['camelCase'],
        },
        {
          selector: 'parameter',
          format: ['camelCase'],
          filter: {
            regex: '^_',
            match: false,
          },
        },
        {
          selector: 'objectLiteralProperty',
          format: null,
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
        {
          selector: 'interface',
          format: ['PascalCase'],
          custom: {
            regex: '^I[A-Z]',
            match: false,
          },
        },
        {
          selector: 'typeAlias',
          format: ['PascalCase'],
          custom: {
            regex: '^T[A-Z]',
            match: false,
          },
        },
      ],
      'no-console': 'error',
      'id-length': ['error', { min: 2, properties: 'never' }],
      curly: ['error', 'all'],
      'no-var': 'error',
      'no-restricted-syntax': [
        'error',
        {
          selector: 'TSEnumDeclaration',
          message: 'Enums are forbidden. Use const objects with `as const` instead.',
        },
        {
          selector: "UnaryExpression[operator='delete']",
          message: 'Use Reflect.deleteProperty() instead of delete operator.',
        },
      ],
      'import/order': [
        'error',
        {
          groups: [
            ['builtin', 'external'],
            ['internal', 'parent', 'sibling', 'index'],
          ],
          'newlines-between': 'never',
        },
      ],
      'sort-imports': [
        'error',
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        },
      ],
      'unicorn/numeric-separators-style': [
        'error',
        {
          number: {
            groupLength: 3,
            minimumDigits: 4,
          },
        },
      ],
    },
  },

  prettierPluginRecommended,
])
