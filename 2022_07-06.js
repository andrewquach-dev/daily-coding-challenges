//https://www.codewars.com/kata/56d02e6cc6c8b49c510005bb/solutions/javascript?filter=me&sort=best_practice

function findMissingNumbers(arr) {
  //P: array of numbers

  //R: array of missing numbers

  //E(3): 
  //[-3,-2,1,4]), [-1,0,2,3]
  //[-1,0,1,2,3,4]), []
  //[]), []

  //P: 
  //declare missingArr to empty
  //loop through smallest value(first) to largest(last)
  //if arr does not contain the value add it to missingArr
  //return missingArr

  let missingArr = []
  for (let i = arr[0]; i < arr[arr.length - 1]; i++) {
    if (!arr.includes(i)) {
      missingArr.push(i)
    }
  }
  return missingArr
}