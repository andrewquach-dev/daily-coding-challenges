//https://www.codewars.com/kata/58c9322bedb4235468000019

function isVeryEvenNumber(n) {
    return !n-- || n % 9 % 2 === 1;
}