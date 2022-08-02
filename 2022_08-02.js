//https://www.codewars.com/kata/57066708cb7293901a0013a1/solutions/javascript?filter=me&sort=best_practice

function fistBeard(arr) {
  //Try and shave him... I dare you!
  return arr
    .reduce((acc, el) => acc.concat(el), [])
    .map((num) => String.fromCharCode(num))
    .join("");
}
