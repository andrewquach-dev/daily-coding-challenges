//https://www.codewars.com/kata/573992c724fc289553000e95

Array.prototype.move = function (from, to) {
    this.splice(to, 0, this.splice(from, 1)[0]);
    return this;
};

function smallest(n) {
    let iter = `${n}`.length, res = new Map();
    for (let i = 0; i < iter; i++) {
        for (let j = 0; j < iter; j++) {
            let number = `${n}`.split('').move(i, j).join('');
            if (!res.has(+number)) res.set(+number, [i, j]);
        }
    }
    let min = Math.min(...res.keys());
    return [min, ...res.get(min)];
}