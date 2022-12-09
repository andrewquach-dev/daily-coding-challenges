//https://www.codewars.com/kata/54fb963d3fe32351f2000102/train/javascript

function collatz(n) {
    return n === 1 ? 1 : n % 2 === 0 ? 1 + collatz(n / 2) : 1 + collatz(3 * n + 1)
}