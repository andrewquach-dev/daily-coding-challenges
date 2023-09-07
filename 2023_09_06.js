//https://www.codewars.com/kata/546ba103f0cf8f7982000df4

function calculate(n1, n2, o) {
    return {
        'add': function (a, b) { return a + b },
        'subtract': function (a, b) { return a - b },
        'multiply': function (a, b) { return a * b }
    }[o](parseInt(n1, 2), parseInt(n2, 2)).toString(2)
}