module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  overrides: [
    {
      files: ['*.less'],
      plugins: ['stylelint-less'],
      customSyntax: 'postcss-less',
      rules: {
        'color-no-invalid-hex': true,
        'less/color-no-invalid-hex': true,
      },
    },
    {
      files: ['*.scss'],
      extends: ['stylelint-config-standard-scss'],
      customSyntax: 'postcss-scss',
      rules: {
        'at-rule-no-unknown': null,
      },
    },
  ],
  rules: {
    'import-notation': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen'],
      },
    ],
    'selector-class-pattern': null,
    'no-descending-specificity': null,
    'no-invalid-position-at-import-rule': null,
  },
};
