//https://www.codewars.com/kata/525fbff0594da0665c0003a3

function nextGen(cells) {
    var get = function (i, j) { return (cells[i] && cells[i][j]) | 0 };

    cells = cells.map(function (row, i) {
        return row.map(function (alive, j) {
            var neighbors =
                get(i - 1, j - 1) + get(i - 1, j) + get(i - 1, j + 1) +
                get(i, j - 1) + get(i, j + 1) +
                get(i + 1, j - 1) + get(i + 1, j) + get(i + 1, j + 1);

            return (neighbors === 3 || (neighbors === 2 && alive)) | 0;
        });
    });

    return cells;
}