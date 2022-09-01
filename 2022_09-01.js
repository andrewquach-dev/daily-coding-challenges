//https://www.codewars.com/kata/59f11118a5e129e591000134/train/javascript

function repeats(arr) {
  return arr
    .filter((e, i, ar) => ar.indexOf(e) === i && ar.lastIndexOf(e) === i)
    .reduce((a, e) => (a += e), 0);
}
