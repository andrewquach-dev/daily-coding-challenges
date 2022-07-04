//https://www.codewars.com/kata/62a611067274990047f431a8/solutions/javascript?filter=me&sort=best_practice

function alternate(n, firstValue, secondValue) {
  // your code
  let arr = []
  let f = true
  for (let i = 0; i < n; i++) {
    if (f) {
      arr.push(firstValue)
    } else {
      arr.push(secondValue)
    }
    f = f ? false : true
  }
  return arr
}