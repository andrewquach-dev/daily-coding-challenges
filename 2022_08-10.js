//https://www.codewars.com/kata/588ac50727eb94c87700001f/solutions/javascript?filter=me&sort=best_practice

function consecutiveOnes(nums) {
  //code me
  //declare a max variable
  //declare temp variable
  //loop through 0 to length -1
  //if ele is 1 then add 1 to temp
  //else
  //check if temp is greater than 0 if it is assign it as max
  //set temp to 0
  let max = 0;
  let temp = 0;
  console.log(nums);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      temp++;
    } else {
      if (temp > max) max = temp;
      temp = 0;
    }
  }
  if (temp > max) max = temp;
  console.log(max);
  return max;
}
