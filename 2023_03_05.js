//https://www.codewars.com/kata/5993fb6c4f5d9f770c0000f2/train/javascript

function sumNoDuplicates(arr) {
    let uniqueArr = [];
    let sum = 0;
    arr.forEach(num => {
        if (arr.indexOf(num) === arr.lastIndexOf(num)) {
            uniqueArr.push(num);
            sum += num;
        }
    });
    return sum;
}