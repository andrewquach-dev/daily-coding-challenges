//https://www.codewars.com/kata/55d277882e139d0b6000005d/train/javascript

var findAverage = function (nums) {
    return nums.reduce((a,n)=>a+=n,0)/nums.length;
  }