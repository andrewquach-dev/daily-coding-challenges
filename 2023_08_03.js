//https://www.codewars.com/kata/572ab0cfa3af384df7000ff8/train/javascript

var shuffleIt = (arr, ...ex) => {
  for ([a, b] of ex) [arr[a], arr[b]] = [arr[b], arr[a]];
  return arr;
};
