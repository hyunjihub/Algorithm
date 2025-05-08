function solution(m, n, puddles) {
    const MOD = 1000000007;
    const dp = Array.from({ length: n }, () => Array(m).fill(0));

    const puddleSet = new Set(puddles.map(([x, y]) => `${y - 1},${x - 1}`));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (puddleSet.has(`${i},${j}`)) {
                dp[i][j] = 0;
                continue;
            }

            if (i === 0 && j === 0) {
                dp[i][j] = 1;
            } else {
                const fromTop = i > 0 ? dp[i - 1][j] : 0;
                const fromLeft = j > 0 ? dp[i][j - 1] : 0;
                dp[i][j] = (fromTop + fromLeft) % MOD;
            }
        }
    }

    return dp[n - 1][m - 1];
}
