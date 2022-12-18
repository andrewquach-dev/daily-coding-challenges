//https://www.codewars.com/kata/5a54e796b3bfa8932c0000ed/solutions/javascript


function jumpingNumber(n) {
    return [...n + ''].every((c, i, a) => !i || Math.abs(c - a[i - 1]) === 1) ? 'Jumping!!' : 'Not!!';
}