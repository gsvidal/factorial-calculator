"use strict";
exports.__esModule = true;
var factorial = function (n) {
    if (n >= 0) {
        if (n === 0)
            return 1;
        return n * factorial(n - 1);
    }
    else {
        // Is not posible (at least in math theory to calculate a negative number's factorial)
        return NaN;
    }
};
exports["default"] = factorial;
