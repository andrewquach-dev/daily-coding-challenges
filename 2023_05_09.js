//https://leetcode.com/problems/decode-ways/solutions/?orderBy=most_votes&languageTags=javascript

function numDecodings(s) {
    if (s == null || s.length === 0) return 0;
    if (s[0] === '0') return 0;

    const dp = new Array(s.length + 1).fill(0);

    dp[0] = 1;
    dp[1] = 1;

    for (let i = 2; i <= s.length; i++) {
        const a = Number(s.slice(i - 1, i))
        if (a >= 1 && a <= 9) {
            dp[i] += dp[i - 1]
        }

        const b = Number(s.slice(i - 2, i));
        if (b >= 10 && b <= 26) {
            dp[i] += dp[i - 2]
        }
    }
    return dp[s.length]
}