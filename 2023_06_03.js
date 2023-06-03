//https://www.codewars.com/kata/5a8d1c82373c2e099d0000ac/train/javascript

const solve = (string, a, b) => string.slice(0, a) + string.slice(a, b + 1).split('').reverse().join('') + string.slice(b + 1);  