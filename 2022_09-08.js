//

//https://www.codewars.com/kata/5a090c4e697598d0b9000004

const solve = arr =>
  [...Array(arr.sort((a, b) => a - b).length)].map((_, idx) => idx % 2 ? arr.shift() : arr.pop());