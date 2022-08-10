//https://www.codewars.com/kata/528d9adf0e03778b9e00067e/solutions/javascript?filter=me&sort=best_practice

function mineLocation(field) {
  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field[0].length; j++) {
      if (field[i][j] === 1) return [i, j];
    }
  }
}
