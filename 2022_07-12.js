//https://www.codewars.com/kata/5679aa472b8f57fb8c000047/solutions/javascript?filter=me&sort=best_practice

function findEvenIndex(arr) {
  //P: arr is array of numbers

  //R: number that is index in which sum of the integers to the left is equal to the sum of the integers to the right

  //E(3): 
  //[1,2,3,4,3,2,1]),3
  //[1,100,50,-51,1,1]),1
  //[1,2,3,4,5,6]),-1

  //P: 
  //loop through 1 to length of arr minus 1
  //if sum of slice of left side and sum of slice of right side is equal
  //return i
  if (arr[0] === arr.slice(0, arr.length).reduce((a, n) => a + n, 0)) {
    return 0
  } else if (arr.slice(0, arr.length).reduce((a, n) => a + n, 0) === arr[arr.length - 1]) {
    return arr.length - 1
  }
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr.slice(0, i).reduce((a, n) => a + n, 0) === arr.slice(i + 1, arr.length).reduce((a, n) => a + n, 0)) {
      return i
    }
  }
  return -1
}