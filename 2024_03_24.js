//https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5

function reverseNumber(n) {
    let isNegative = n < 0;
    let reverseAsString = Math.abs(n).toString().split('').reverse().join('');
    let result = Number(reverseAsString);

    return isNegative ? -result : result;
}