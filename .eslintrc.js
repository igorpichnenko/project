module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jquery": true
    },
    "extends": [
        "eslint:recommended",
        "airbnb-base",
        "plugin:fsd/all",
    ],

    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
    ],
    rules: {
    "import/prefer-default-export": "off",
    "import/no-default-export": "error",
    "import/no-cycle": "off",
    "no-undef": "off",
    "no-param-reassign": "off",
    "class-methods-use-this": "off",
    "no-new": "off",
    "import/extensions": [
          "error",
          "ignorePackages",
          {
            "js": "never",
            "jsx": "never",
            "ts": "never",
            "tsx": "never"
          }
       ],
      
        },
        "settings": {
          "import/resolver": "webpack"
        },
};
