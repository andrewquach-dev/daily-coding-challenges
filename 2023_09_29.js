//https://www.codewars.com/kata/586e1d458cb711f0a800033b/train/javascript

function processData(data) {
    return data.reduce((a, [b, c]) => a * (b - c), 1)
}