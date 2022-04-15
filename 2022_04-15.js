//https://www.codewars.com/kata/572b77262bedd351e9000076/train/javascript

function first(arr, n = 1) {

    //return the arr filtering index less than n but check if n is 0 if it is then return empty array
    return n === 0 ? [] : arr.filter((el, i) => i < n);
}