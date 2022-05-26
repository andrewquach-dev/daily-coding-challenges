//https://www.codewars.com/kata/5a1a9e5032b8b98477000004/solutions/javascript/me/best_practice

function evenLast(numbers) {
  //P: Array of integers

  //R: Integer which is the sum of all numbers that have even index multiplied by the integer at the last index. (If empty return 0)

  //E(3): [2, 3, 4, 5] => 30

  //P: 
  //Declare answer variable
  //Loop through each number in array
  //Check if the number is an even index
  //If it is then multiple that integer by the last index number and add it to answer
  //Return answer

  let ans = 0;
  numbers.forEach((n, i) => {
    if (i % 2 === 0) {
      ans += n * numbers[numbers.length - 1];
    }
  });
  return ans;

}