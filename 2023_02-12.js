//https://www.codewars.com/kata/59ca8e8e1a68b7de740001f4/train/javascript

const solve = (a, b) => b.map(x => a.filter(n => n === x).length)