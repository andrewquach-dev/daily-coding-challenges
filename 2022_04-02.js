//https://www.codewars.com/kata/57f6ad55cca6e045d2000627/train/javascript

function squareOrSquareRoot(array) {
  return array.slice(0).map(num=>Math.sqrt(num)%1===0?Math.sqrt(num):Math.pow(num,2));  
}