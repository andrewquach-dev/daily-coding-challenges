//https://www.codewars.com/kata/554dc2b88fbafd2e95000125


function vectorLength(v) {
    return Math.sqrt(Math.pow(v[0][0] - v[1][0], 2) + Math.pow(v[0][1] - v[1][1], 2));
}