//https://www.codewars.com/kata/59a1ec603203e862bb00004f/train/javascript

function checkConcatenatedSum(sum, n) {
    var abs = Math.abs(sum);
    return abs === [...abs + ""].reduce((s, d) => +d.repeat(n) + s, 0);
}