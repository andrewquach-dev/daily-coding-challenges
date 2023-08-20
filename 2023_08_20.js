//https://www.codewars.com/kata/5868812b15f0057e05000001

function tailSwap(arr) {
    let newArr = arr
        .map(string => string.split(':'))
    return [newArr[0][0] + ':' + newArr[1][1], newArr[1][0] + ':' + newArr[0][1]];
}