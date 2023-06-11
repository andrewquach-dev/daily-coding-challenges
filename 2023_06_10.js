//https://www.codewars.com/kata/56e7d40129035aed6c000632/train/javascript

function easyLine(n) {
    let res = 1;
    for (let i = 1; i <= n; i++) {
        res *= (n + i) / i;
    }
    return Math.round(Math.log(res));
}