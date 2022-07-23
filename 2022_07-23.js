//https://www.codewars.com/kata/5a7b3d08fd5777bf6a000121/solutions/javascript?filter=me&sort=best_practice

function removeNthElement(arr, n) {
  // Fix it
  var arrCopy = arr.slice(0);
  arrCopy.splice(n, 1); // removes the nth element
  return arrCopy;
}
