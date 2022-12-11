//https://www.codewars.com/kata/5208fc3cb613bc725f000142/train/javascript

function solution(string, limit) {
    return string.length <= limit ? string : string.split('').slice(0, limit).join('') + '...'
}