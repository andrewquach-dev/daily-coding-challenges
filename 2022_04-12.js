//https://www.codewars.com/kata/57cff961eca260b71900008f/train/javascript

function isVow(a) {
    return a.map(ele => ele === 97 || ele === 101 || ele === 105 || ele === 111 || ele === 117 ? String.fromCharCode(ele) : ele);
}