//https://www.codewars.com/kata/57277a31e5e51450a4000010/solutions/javascript

function firstToLast(str, c) {
  //coding here..\
  console.log(str.lastIndexOf(c) + ' ' + str.indexOf(c))
  return str.lastIndexOf(c) === -1 && str.indexOf(c) === -1 ? -1 : str.lastIndexOf(c) - str.indexOf(c);

}