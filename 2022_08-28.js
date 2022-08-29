//https://www.codewars.com/kata/58fdc60ed94f25a863000092/train/javascript

function twins(myArray) {
  return myArray.every((v) => myArray.filter((x) => x == v).length === 2);
}
