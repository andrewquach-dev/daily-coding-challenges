//https://www.codewars.com/kata/595aa94353e43a8746000120/solutions/javascript/me/best_practice


function findDeletedNumber(arr, mixArr) {
  //Parameters: 2 arrays. First array is an ordered sequence of numbers 1 to N. Second array is mixed numbers with 1 number deleted.

  //Returns: Return the deleted number

  //Examples(3): 
  //[1,2,3,4,5], [3,4,1,5]) => 2
  //[1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]) => 5
  //[1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]) => 0


  //Pseudocode: 
  //sort the second array
  //loop through the first array's length
  //each iteration check if array[i] exists in second array
  //if it doesn't return the value

  mixArr = mixArr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== mixArr[i]) {
      return arr[i];
    }
  }
  return 0;
}