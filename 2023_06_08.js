//https://www.codewars.com/kata/52756e5ad454534f220001ef/train/javascript


var LCS = function (x, y) {
    let dp = new Array(x.length + 1).fill(null).map(() => new Array(y.length + 1).fill(''))

    for (let i = 1; i < x.length; i++) {
        for (let j = 1; j <= y.length; j++) {
            if (x[i - 1] === y[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + x[i - 1]
            } else {
                dp[i][j] = dp[i - 1][j].length > dp[i][j - 1].length ? dp[i - 1][j] : dp[i][j - 1]
            }
        }
    }
    return dp[x.length][y.length]
};
