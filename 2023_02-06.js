//https://www.codewars.com/kata/5b752a42b11814b09c00005d/train/javascript

function solve(a, b) {
    while (a >= (2 * b) || b >= (2 * a)) {
        if (a == 0 || b == 0) {
            return [a, b];
        } else if (a >= (2 * b)) {
            a = a % (2 * b);
        } else if (b >= 2 * a) {
            b = b % (2 * a);
        }
    }
    return [a, b];
}