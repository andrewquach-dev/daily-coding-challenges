//https://www.codewars.com/kata/5b39e91ee7a2c103300018b3/train/javascript

const removeConsecutiveDuplicates = (s) =>
  s
    .split(" ")
    .filter((x, i, arr) => x != arr[i - 1])
    .join(" ");
