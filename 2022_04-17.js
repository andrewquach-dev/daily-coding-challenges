//https://www.codewars.com/kata/5aba780a6a176b029800041c/solutions/javascript/me/best_practice

function maxMultiple(divisor, bound) {
    let ans = 0;
    for (i = bound; i > 0; i--) {
        if (i % divisor === 0 && i <= bound && i > 0) {
            return i;
        }
    }
}