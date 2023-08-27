//https://www.codewars.com/kata/57be674b93687de78c0001d9

function largestPower(n) {
    return Math.ceil(Math.log10(n) / Math.log10(3)) - 1
}