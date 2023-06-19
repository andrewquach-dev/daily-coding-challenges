//https://www.codewars.com/kata/57a60bad72292d3e93000a5a/train/javascript

function toAcronym(input) {
  return input
    .split(" ")
    .map(function (item) {
      return item[0].toUpperCase();
    })
    .join("");
}
