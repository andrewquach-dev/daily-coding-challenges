//https://www.codewars.com/kata/58aed2cafab8faca1d000e20



function modifiedSum(a, n) {
    // Write your code here
    let sum = a.reduce((a, e) => a += e, 0);
    return a.reduce((a, e) => a += Math.pow(e, n), 0) - sum
}