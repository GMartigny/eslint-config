const off = 0;
const error = 2;

module.exports = {
    extends: "airbnb-base",
    env: {
        browser: true,
    },
    rules: {
        "require-jsdoc": [error, {
            require: {
                FunctionDeclaration: true,
                MethodDefinition: true,
                ClassDeclaration: true,
            },
        }],
        "no-underscore-dangle": [error, {
            allowAfterThis: true,
        }],
        "no-param-reassign": [error, {
            props: false,
        }],
        "no-return-assign": off,
        "max-len": [error, {
            code: 120,
            ignoreComments: true,
            ignoreTrailingComments: true,
        }],
        "no-plusplus": off,
        "brace-style": [error, "stroustrup"],
        quotes: [error, "double"],
        "valid-jsdoc": [error, {
            requireReturn: false,
            requireReturnDescription: false,
        }],
        indent: [error, 4, {
            SwitchCase: 1,
        }],
        "space-before-function-paren": [error, "always"],
        "operator-linebreak": [error, "after"],
        "object-curly-newline": [error, {
            "ObjectExpression": { multiline: true, minProperties: 1 },
            "ObjectPattern": { multiline: true },
            "ImportDeclaration": { multiline: true },
            "ExportDeclaration": { multiline: true, minProperties: 1 },
        }],
    },
};
