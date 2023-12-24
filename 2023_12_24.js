//https://www.codewars.com/kata/57faefc42b531482d5000123

function remove(s) {
    return s.replace(/!+(?!!*$)/g, '');
}