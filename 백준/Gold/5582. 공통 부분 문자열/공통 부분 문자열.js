const fs = require('fs');
let [str1, str2] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

str1 = str1.trim();
str2 = str2.trim();

let dp = Array.from({ length: str1.length + 1 }, () => Array(str2.length + 1).fill(0));
let answer = 0;
for (let i = 1; i <= str1.length; i++) {
  for (let j = 1; j <= str2.length; j++) {
    if (str1[i - 1] === str2[j - 1]) {
      dp[i][j] = dp[i - 1][j - 1] + 1;
    }
    answer = Math.max(answer, dp[i][j]);
  }
}

console.log(answer);
