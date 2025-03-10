function solution(info, n, m) {
    const size = info.length;
    const dp = Array.from({ length: size + 1 }, () => Array(m).fill(Infinity));

    dp[0][0] = 0;

    for (let i = 1; i <= size; i++) {
        const a = info[i - 1][0];
        const b = info[i - 1][1];

        for (let j = 0; j < m; j++) {
            dp[i][j] = Math.min(dp[i][j], dp[i - 1][j] + a);
            if (j + b < m) {
                dp[i][j + b] = Math.min(dp[i][j + b], dp[i - 1][j]);
            }
        }
    }

    let min = Infinity;
    for (let j = 0; j < m; j++) {
        min = Math.min(dp[size][j], min);
    }

    return min >= n ? -1 : min;
}
