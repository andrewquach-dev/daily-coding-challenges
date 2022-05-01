//https://www.codewars.com/kata/588417e576933b0ec9000045/solutions/javascript

function seatsInTheater(nCols, nRows, col, row) {
  return (nCols - col + 1) * (nRows - row);
}