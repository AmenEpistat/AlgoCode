export default {
    extends: [
        'stylelint-config-standard-scss',
        'stylelint-config-prettier',
    ],
    plugins: ['stylelint-scss'],
    rules: {
        'scss/at-import-no-partial-leading-underscore': null,
        'scss/at-import-partial-extension': null,
        'selector-class-pattern': null,
    },
};
