//https://www.codewars.com/kata/58069e4cf3c13ef3a6000168/train/javascript


function reverse(n) {
    let rev = 0;
    while (n) {
        rev = rev * 10 + n % 10;
        n = Math.floor(n / 10);
    }
    return rev;
}