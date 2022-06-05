//https://www.codewars.com/kata/5a090c4e697598d0b9000004/solutions/javascript/me/best_practice

function solve(arr) {
  //P:array of numbers

  //R:array of numbers rearragned like so , max min 2ndMax 2ndMin etc

  //E(3):
  //solve([15,11,10,7,12]) = [15,7,12,10,11]
  //solve([91,75,86,14,82]) = [91,14,86,75,82]

  //P:
  //declare answer array
  //declare flipflop boolean
  //sort original array from least to greatest
  //loop through original array
  //every iteration if flipflop is true then pop and add to answer array
  //else unshift and add to answer array
  //return answer array

  let ans = [];
  let maxsTurn = true;
  let arr2 = arr.slice(0).sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    console.log(arr.length);
    if (maxsTurn) {
      ans.push(arr2.pop());
    } else {
      ans.push(arr2.shift());
    }
    maxsTurn = maxsTurn === true ? false : true;
    console.log('hi')
  }
  return ans;
};