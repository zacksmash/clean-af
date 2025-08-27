import vue from 'eslint-plugin-vue'
import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'

export default defineConfigWithVueTs(
    vue.configs['flat/essential'],
    vueTsConfigs.recommended,
    {
        ignores: ['vendor', 'node_modules', 'public', 'bootstrap/ssr', 'tailwind.config.js', 'resources/js/wayfinder'],
    },
    {
        plugins: {
            'better-tailwindcss': eslintPluginBetterTailwindcss,
        },
        rules: {
            'comma-dangle': ['warn', 'always-multiline'],
            'indent': ['warn', 4, { 'SwitchCase': 1 }],
            'no-multiple-empty-lines': [
                'error',
                {
                    max: 1,
                    maxBOF: 0,
                    maxEOF: 1,
                },
            ],
            'no-multi-spaces': 'error',
            'no-trailing-spaces': ['error'],
            'object-curly-spacing': ['error', 'always'],
            'object-curly-newline': 'error',
            'object-property-newline': ['error', {
                allowAllPropertiesOnSameLine: true,
            }],
            'quotes': ['error', 'single'],
            'sort-imports': [
                'error',
                {
                    ignoreDeclarationSort: true,
                    allowSeparatedGroups: true,
                },
            ],
            'semi': ['error', 'never'],

            'better-tailwindcss/no-unnecessary-whitespace': 'warn',
            'better-tailwindcss/sort-classes': ['warn', {
                order: 'improved',
            }],
            'better-tailwindcss/no-duplicate-classes': ['warn'],
            'better-tailwindcss/enforce-consistent-variable-syntax': ['warn'],
            'better-tailwindcss/no-conflicting-classes': ['warn'],

            'vue/attributes-order': [
                'error',
                {
                    alphabetical: false,
                },
            ],
            'vue/block-lang': 'off',
            'vue/first-attribute-linebreak': 'error',
            'vue/html-closing-bracket-newline': 'error',
            'vue/html-closing-bracket-spacing': [
                'error',
                { selfClosingTag: 'never' },
            ],
            'vue/html-indent': ['error', 4],
            'vue/html-self-closing': ['warn', {
                'html': {
                    'normal': 'any',
                    'component': 'any',
                },
            }],
            'vue/max-attributes-per-line': [
                'error',
                {
                    singleline: 2,
                    multiline: 1,
                },
            ],
            'vue/multi-word-component-names': 'off',
            'vue/multiline-html-element-content-newline': 'error',
            'vue/no-reserved-component-names': 'off',
            'vue/no-undef-components': 'off',
            'vue/no-v-text-v-html-on-component': 'off',
            'vue/padding-line-between-tags': ['error', [
                { 'blankLine': 'always', 'prev': '*', 'next': '*' },
            ]],
            'vue/padding-lines-in-component-definition': ['error', {
                'betweenOptions': 'always',
                'withinOption': {
                    'props': {
                        'betweenItems': 'never',
                        'withinEach': 'never',
                    },
                    'data': {
                        'betweenItems': 'never',
                        'withinEach': 'never',
                    },
                },
                'groupSingleLineProperties': false,
            }],
            'vue/script-indent': ['error', 4, { 'switchCase': 1 }],
        },
    },
)
