//https://www.codewars.com/kata/5458d4d2cbae2a9438000389/train/javascript

var make_lazy = function (fn) {
    return fn.bind.apply(fn, arguments);
};