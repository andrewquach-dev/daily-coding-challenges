//https://www.codewars.com/kata/598f76a44f613e0e0b000026/solutions/javascript

function sumOfIntegersInString(s) {
    return s
        .split(/([^0-9])/g)
        .map(x => parseInt(x))
        .filter(Boolean)
        .reduce((acc, el) => acc + el, 0)
}