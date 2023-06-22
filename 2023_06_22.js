//https://www.codewars.com/kata/593e978a3bb47a8308000b8f/train/javascript

function rotateClockwise(matrix) {
  if (matrix.join("").length === 0) return [];
  let nm = new Array(matrix[0].length)
    .fill("")
    .map((e) => new Array(matrix.length).fill("").slice());
  for (let i = 0; i < nm.length; i++) {
    for (let j = 0; j < nm[i].length; j++) {
      nm[i][j] = matrix[matrix.length - j - 1][i];
    }
  }
  return nm.map((r) => r.join(""));
}
