//https://www.codewars.com/kata/5a1c84c1c374cb6f7e000104/solutions/javascript?filter=me&sort=best_practice&invalids=false

function select(arrSearch, arrTake) {
  let l = arrSearch.sort().reverse()[2][2];
  return arrTake.some((e) => e[0] === l)
    ? arrTake.find((e) => e[0] === l)
    : "Nothing here";
}
