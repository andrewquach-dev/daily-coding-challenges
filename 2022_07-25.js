//https://www.codewars.com/kata/58b972cae826b960a300003e/solutions/javascript

const missingWord = (nums, str) =>
  nums.sort((a, b) => a - b)[nums.length - 1] <
  (str = str.replace(/\s/g, ``).toLowerCase()).length
    ? nums.map((val) => str[val]).join(``)
    : `No mission today`;
