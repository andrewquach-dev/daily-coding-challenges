//https://www.codewars.com/kata/5ba38ba180824a86850000f7




function solve(arr) {
  let newArr = arr.slice().filter((n, i) => arr.indexOf(n) !== i)
  for (let i = 0; i < newArr.length; i++) {
    arr.splice(arr.indexOf(newArr[i]), 1)
  }
  return arr
}