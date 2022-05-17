//https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/solutions/javascript/me/best_practice

function rowSumOddNumbers(n) {
  //Parameters:number n which stands for nth row of triangle
  //
  //Return: sum of the nth row
  //
  //Examples(3):
  //1 -> 1
  //2 -> 3 + 5 = 8
  //3 -> 7 + 9 + 11 = 27
  //Pseudocode:
  //create parent array
  //create child array
  //create odd number = 1
  //loop involving n
  //another loop within 
  //add odd number to child array
  //increment odd number
  //after inner loop add that array
  
  let parentArray = [];
  let childArray = [];
  let oddNum = 1;
  let count = 1;
  
  for(let i = 0;i<n;i++){
    childArray = [];
    for(let j = 0;j<count;j++){
      childArray.push(oddNum);
      oddNum+=2;
    }
    count++;
    parentArray.push(childArray);
  }
  console.log(parentArray[n-1]);
  return parentArray[n-1].reduce((a,n)=>a+=n,0);
}