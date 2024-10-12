const fs = require('fs');
const [N, K] = fs.readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);

let minSum = (K * (K + 1)) / 2;

if (minSum > N) console.log(-1);
else {
  let min = 1;
  let max = K;

  if (N - minSum > 0) {
    min += Math.floor((N - minSum) / K);
    max += Math.ceil((N - minSum) / K);
  }

  console.log(max - min);
}
