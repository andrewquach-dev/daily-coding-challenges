//https://www.codewars.com/kata/5a4138acf28b82aa43000117/solutions/javascript

function adjacentElementsProduct(array) {
    let newArr = []
    for (i = 0; i < array.length - 1; i++) {
        newArr.push(array[i] * array[i + 1])
    }
    return Math.max(...newArr)
}