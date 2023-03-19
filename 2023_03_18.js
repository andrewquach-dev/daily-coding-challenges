//https://www.codewars.com/kata/52195c9bb576caf14200007f/train/javascript

Array.range = function (start, count) {
    return Array.from({ length: count }, (_, index) => start + index)
}

Array.prototype.sum = function () {
    return this.reduce((a, b) => a + b, 0);
}