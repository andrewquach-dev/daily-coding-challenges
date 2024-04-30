//https://www.codewars.com/kata/593e978a3bb47a8308000b8f

function rotateClockwise(matrix) {
    if (matrix.length === 0) {
        return [];
    }

    return matrix[0]
        .split('')
        .map((v, i) => matrix
            .map((value) => value[i])
            .reverse()
            .join('')
        );
}