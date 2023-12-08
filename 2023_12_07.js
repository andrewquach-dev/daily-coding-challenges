//https://www.codewars.com/kata/5adbc57f0774dbaa5600011b

Map.prototype.reduce = function (reduceFn, acc) {
    for (let [value, key] of this) {
        acc = reduceFn(acc, key, value);
    }
    return acc;
}

const fizzBuzzReloaded = (start, stop, step, fns) => (
    Array.from({
        length: (stop - start) / step + 1
    },
        (_, i) => fns.reduce((acc, fn, value) => (
            fn(start + i * step) ? acc + value : acc
        ), '') || start + i * step
    ).join` `
);