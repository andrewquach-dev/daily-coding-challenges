//https://www.codewars.com/kata/57a62154cf1fa5b25200031e/train/javascript

function alternateCase(s) {
    return s.split('').map(e => e = e == e.toLowerCase() ? e.toUpperCase() : e.toLowerCase()).join('');
}