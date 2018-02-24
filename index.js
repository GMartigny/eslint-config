const off = 0;
const warn = 1;
const error = 2;

module.exports = {
    extends: "airbnb-base",
    env: {
        "browser": true
    },
    rules: {
        "require-jsdoc": [error, {
            require: {
                FunctionDeclaration: true,
                MethodDefinition: true,
                ClassDeclaration: true
            }
        }],
        "no-underscore-dangle": [error, {
            allowAfterThis: true
        }],
        "no-param-reassign": [error, {
            props: false
        }],
        "no-return-assign": off,
        "max-len": [error, {
            code: 120
        }],
        "no-plusplus": off,
        "brace-style": [error, "stroustrup"],
        "quotes": [error, "double"],
        "valid-jsdoc": [error, {
            requireReturn: false,
            requireReturnDescription: false
        }],
        "indent": [error, 4],
        "space-before-function-paren": [error, "always"]
    }
};
