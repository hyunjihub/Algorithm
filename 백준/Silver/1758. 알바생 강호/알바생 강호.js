const fs = require('fs');
let [N, ...tips] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = BigInt(N);

tips = tips.map(BigInt);
tips.sort((a, b) => (a < b ? 1 : -1));
let answer = 0n;
for (let i = 0n; i < tips.length; i++) {
  let tip = tips[i] - i;
  if (tip > 0n) answer += tip;
}

console.log(answer.toString());
