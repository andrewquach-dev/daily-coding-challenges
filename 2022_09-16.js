//https://www.codewars.com/kata/5946a0a64a2c5b596500019a/train/javascript

function splitAndAdd(arr, n) {
  //arr is array of numbers, n is integer
  //declare var1 thats arr.length/2 rounded to floor
  //loop n times
  //create arr1 slicing from 0 to var1 and reverse
  //create arr2 slicing from var1 to length and reverse
  //let arr equal arr2 mapped so that every element add arr1 at same index to it then reverse
  let ans = arr;

  for (let i = 0; i < n; i++) {
    let halfIndex = Math.floor(ans.length / 2);
    let firstHalf = ans.slice(0, halfIndex).reverse();
    let secondHalf = ans.slice(halfIndex, ans.length).reverse();
    ans = secondHalf
      .map((e, i) => (firstHalf[i] ? (e += firstHalf[i]) : e))
      .reverse();
  }
  return ans;
}
