//https://leetcode.com/problems/pacific-atlantic-water-flow/

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
    let ROWS = heights.length
    let COLS = heights[0].length
    let pac = new Set()
    let atl = new Set()
    let res = []

    function dfs(r, c, visit, prevHeight) {
        if (Math.min(r, c) < 0 || r >= ROWS || c >= COLS || heights[r][c] < prevHeight || visit.has(r + '-' + c)) { //Checks for invalid entries
            return
        }

        visit.add(r + '-' + c) //Valid entries gets added to set
        dfs(r + 1, c, visit, heights[r][c]) //Checks neighbors
        dfs(r - 1, c, visit, heights[r][c])
        dfs(r, c + 1, visit, heights[r][c])
        dfs(r, c - 1, visit, heights[r][c])
    }

    for (let c = 0; c < COLS; c++) {
        dfs(0, c, pac, heights[0][c]) //Top
        dfs(ROWS - 1, c, atl, heights[ROWS - 1][c]) //Bottom
    }

    for (let r = 0; r < ROWS; r++) {
        dfs(r, 0, pac, heights[r][0]) //Left
        dfs(r, COLS - 1, atl, heights[r][COLS - 1]) //Right
    }

    for (let r = 0; r < ROWS; r++) { //Checks for collisions
        for (let c = 0; c < COLS; c++) {
            if (pac.has(r + '-' + c) && atl.has(r + '-' + c)) { //If both sets have the same values
                res.push([r, c]) //Push coord to res
            }
        }
    }

    return res
};