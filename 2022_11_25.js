//https://www.codewars.com/kata/590e03aef55cab099a0002e8/train/javascript

function incrementer(nums) {
  if (nums == []) return []
  return nums.map((n, i) => (i + n + 1) % 10)
}
