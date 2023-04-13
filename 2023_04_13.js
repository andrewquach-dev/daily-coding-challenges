//https://leetcode.com/problems/unique-paths/description/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    // Initialize the row array with n elements, each set to 1
    let row = Array(n).fill(1);

    // Iterate through m - 1 times
    for (let i = 0; i < m - 1; i++) {
        // Create a new row array with n elements, each set to 1
        let newRow = Array(n).fill(1);

        // Iterate through n - 2 to 0, inclusive, in reverse order
        for (let j = n - 2; j >= 0; j--) {
            // Update the current element in newRow by adding the element to the right
            // in newRow and the corresponding element in the previous row
            newRow[j] = newRow[j + 1] + row[j];
        }

        // Update the row array to be the newRow array
        row = newRow;
    }

    // Return the first element of the final row array
    return row[0];
};