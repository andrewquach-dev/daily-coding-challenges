//https://www.codewars.com/kata/5a430359e1ce0e35540000b1/solutions/javascript?filter=me&sort=best_practice&invalids=false

function averageLength(arr) {
  //arr is array of strings

  //return new array that has each element repeated with average length of arr

  //['u', 'y'] =>  ['u', 'y'] // average length is 1
  //['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
  //['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3

  //declare avg variable which is average of lengths rounded
  //return arr mapped by taking first element and repeating it avg times

  const avg = Math.round(arr.reduce((a, e) => (a += e.length), 0) / arr.length);
  return arr.map((e) => e[0].repeat(avg));
}
