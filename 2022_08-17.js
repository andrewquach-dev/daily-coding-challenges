//https://www.codewars.com/kata/5825792ada030e9601000782/train/javascript

function zipWith(fn, a0, a1) {
  //declare arr with shortest length
  //go through the shorter length array
  //apply function to a0 indexed ele and a1 as well
  //push to arr
  //return arr
  let ans = Array(a0.length < a1.length ? a0.length : a1.length);
  for (let i = 0; i < (a0.length < a1.length ? a0.length : a1.length); i++) {
    ans[i] = fn(a0[i], a1[i]);
  }
  return ans;
}
