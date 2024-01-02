//https://www.codewars.com/kata/59c62f1bdcc40560a2000060

function solve(a) {
    return a.reduce(((x, y) => Number.isInteger(y) ? (y % 2 === 0 ? x + 1 : x - 1) : x), 0);
} 