//https://www.codewars.com/kata/55968ab32cf633c3f8000008

function initials(n) {
    return n.split(' ').map((v, i, a) => v.charAt(0).toUpperCase() + (i == a.length - 1 ? v.slice(1) : '.')).join('');
}
