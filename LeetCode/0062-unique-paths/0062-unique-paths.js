/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let dp = Array.from({length: m+n-1}, () => Array(m+n-1).fill(0));

    for (let i = 0; i <= m+n-2; i++) {
        dp[i][0] = 1;
        dp[i][i] = 1;
    }

    for (let i = 1; i <= m+n-2; i++) {
        for (let j = 1; j < i; j++) {
            dp[i][j] = dp[i-1][j-1] + dp[i-1][j];
        }
    }
    
    return dp[m+n-2][m-1];
};