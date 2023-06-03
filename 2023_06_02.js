//https://www.codewars.com/kata/5a4b16435f08299c7000274f

const sumSquareEvenRootOdd = ns => {
    return +(ns.reduce((a, b) => a + (b % 2 ? b ** 0.5 : b ** 2), 0)).toFixed(2)
};