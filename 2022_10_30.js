//https://www.codewars.com/kata/59706036f6e5d1e22d000016/train/javascript

function wordsToMarks(string) {
    //your code here
    return string.split('').map(l => l = l.charCodeAt(0) - 96).reduce((a, e) => a += e, 0)
}