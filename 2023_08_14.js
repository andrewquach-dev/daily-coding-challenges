//https://projecteuler.net/problem=5

function smallestMultiple(limit) {
    function gcd(a, b) {
        while (b) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }

    let result = 1;
    for (let i = 2; i <= limit; i++) {
        result = lcm(result, i);
    }

    return result;
}

const limit = 20;
const answer = smallestMultiple(limit);
console.log(`The smallest positive number divisible by all numbers from 1 to ${limit} is: ${answer}`);
