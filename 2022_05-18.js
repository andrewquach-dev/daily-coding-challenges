//https://www.codewars.com/kata/580dda86c40fa6c45f00028a/solutions/javascript

function cubeOdd(arr) {
  //Parameters: Array of numbers

  //Returns: Number that is the sum of the odd numbers after cubing them

  //Examples(3): 

  //Pseudocode: 
  //If every element in the array is not a number then return undefined else
  //filter out even numbers in the array
  //map it by cubing each element
  //reduce it and sum it together
  return arr.every(ele=>typeof ele ==='number')?
    arr.filter(num=>num%2!==0).map(num=>Math.pow(num,3)).reduce((a,num)=>a+=num):undefined;

}