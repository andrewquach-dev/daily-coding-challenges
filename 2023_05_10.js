//https://www.codewars.com/kata/5526fc09a1bbd946250002dc

//P: take in array of integers
//R: return single integer
//E: [2, 4, 0, 100, 4, 11, 2602, 36] Should return: 11 (the only odd number)
//   [160, 3, 1719, 19, 11, 13, -21] Should return: 160 (the only even number)
//P:create variables called evencount and oddcount
//go through each number and check if even or odd and increment 
//if a var is equal to 1 then return it

function findOutlier(int) {
    let even = int.filter(a => a % 2 == 0);
    let odd = int.filter(e => e % 2 !== 0);
    return even.length == 1 ? even[0] : odd[0]
}