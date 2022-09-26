// Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

function twoSum(arr, sum) {
  let ans = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        ans.push([arr[i], arr[j]]);
      }
    }
  }
  return ans;
}

console.log(
  twoSum([1, 2, 2, 3, 4], 4) ==
    [
      [1, 3],
      [2, 2],
    ]
);
console.log(twoSum([1, 2, 2, 3, 4], 4));
