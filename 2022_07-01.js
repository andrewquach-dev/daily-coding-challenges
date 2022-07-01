//https://www.codewars.com/kata/55ed875819ae85ca8b00005c/solutions/javascript?filter=me&sort=best_practice

function multiplyAndFilter(array, multiplier) {
  //P: array is array of integers, multiplier is float

  //R: array of integers

  //E(3): 
  //[1,2,3,4], 1.5), [1.5, 3, 4.5, 6]
  //[1,2,3], 0), [0, 0, 0]
  //[0,0,0], 2), [0, 0, 0]

  //P: 
  //filter out non numeric values in array
  //multiply each element in array by multiplier and return it
  console.log('og ' + array)
  console.log('fil ' + array.filter(e => typeof e === 'number'))
  console.log('ans ' + array.filter(e => typeof e === 'number').map(e => e * multiplier))
  return array.filter(e => typeof e === 'number').map(e => e * multiplier);

}