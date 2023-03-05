//https://www.codewars.com/kata/563fb342f47611dae800003c/train/javascript

function trim(arr, size) {
    if (arr.length <= size) return arr;
    if (arr.length < 3) return arr.slice(0, size) + '...';
    return arr.slice(0, size - 3) + '...';
}