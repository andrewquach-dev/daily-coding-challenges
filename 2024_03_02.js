//https://www.codewars.com/kata/5519e930cd82ff8a9a000216

function hammingWeight(x) {
    return x ? x % 2 + hammingWeight(x >> 1) : x
}//z.
