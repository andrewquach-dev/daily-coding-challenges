//https://www.codewars.com/kata/5899642f6e1b25935d000161/train/javascript

function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2).filter((value,index,array)=>array.indexOf(value)===index).sort((a,b)=>a-b);
  }