const off = 0;
const error = 2;

module.exports = {
    extends: [
        "plugin:vue/recommended",
    ],
    rules: {
        "vue/html-indent": [error, 4],
        "vue/max-attributes-per-line": [error, {
            singleline: {
                max: 2,
            },
            multiline: {
                max: 1,
            },
        }],
    },
};
