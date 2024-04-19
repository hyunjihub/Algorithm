function solution(n) {
    let answer = 0;
    let dp = [];
    dp[0] = 1;
    dp[1] = 2;
    
    for(let i=2; i<n; i++) {
        dp[i] = dp[i-1]+dp[i-2];
        dp[i] %= 1234567;
    }
    
    if(n===1) answer = 1;
    else answer = dp[dp.length-1];
    
    return answer;
}