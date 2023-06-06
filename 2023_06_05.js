//https://www.codewars.com/kata/58e230e5e24dde0996000070/train/javascript



const nextPrime = (n) => isPrime(n + 1) ? n + 1 : nextPrime(n + 1);

const isPrime = (n) => {
    if (n < 2) {
        return false;
    }

    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}