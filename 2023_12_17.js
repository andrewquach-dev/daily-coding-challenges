//https://www.codewars.com/kata/53629117f81a7f9b9e000d1e

function makePalindrome(text) {
    var rev = text.split('').reverse().join('');
    for (var i = text.length; i > 0; i -= 1) {
        if (rev.slice(0, i) === text.slice(-i)) {
            return text + rev.slice(i);
        }
        if (text.slice(0, i) === rev.slice(-i)) {
            return rev + text.slice(i);
        }
    }
}