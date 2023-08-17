// /https://www.codewars.com/kata/5b1e2c04553292dacd00009e

const isPrimeNumber = num => {

    for (let i = 2; i * i <= num; i++)
        if (num % i === 0)
            return false;

    return true;

};

const isPrimeWord = (word, add = 0) =>
    [...word].some(char => isPrimeNumber(char.charCodeAt(0) + add));

const primeWord = arr =>
    arr.map(([name, add]) => +isPrimeWord(name, add));