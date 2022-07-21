//https://www.codewars.com/kata/5bd00c99dbc73908bb00057a/solutions/javascript?filter=me&sort=best_practice

function alphaSeq(str) {
  //your code here
  return str
    .split("")
    .map((l) => (l = l.toUpperCase()))
    .sort()
    .map((l) => (l = l + l.toLowerCase().repeat(l.charCodeAt(0) - 65)))
    .join(",");
}
