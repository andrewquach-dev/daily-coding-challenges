//https://www.codewars.com/kata/5639bdcef2f9b06ce800005b/solutions/javascript?filter=me&sort=best_practice

function makeString(s) {
  // ...
  return s.split(' ').map(c => c[0]).join('')
}