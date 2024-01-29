//https://www.codewars.com/kata/57741d8f10a0a66915000001

const intDiff = (arr, n) => {
    let count = 0;
    for (let i = 1; i < arr.length; i++)
        for (let j = 0; j < i; j++)
            if (Math.abs(arr[i] - arr[j]) === n) count++;
    return count;
}