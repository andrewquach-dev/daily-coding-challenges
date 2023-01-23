//https://www.codewars.com/kata/57f5e7bd60d0a0cfd900032d/solutions/javascript

function missingNo(nums) {
    return 5050 - nums.reduce((a, b) => a + b, 0)
}