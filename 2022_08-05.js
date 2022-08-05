//https://www.codewars.com/kata/5a005f4fba2a14897f000086/solutions/javascript?filter=me&sort=best_practice

function sumItUp(numbersWithBases) {
  return numbersWithBases
    .map((n) => (n = parseInt(n[0], n[1])))
    .reduce((a, e) => (a += e), 0);
}
