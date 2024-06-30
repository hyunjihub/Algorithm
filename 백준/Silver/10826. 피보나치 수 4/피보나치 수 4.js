var fs = require('fs');
let N = fs.readFileSync(0, 'utf-8').toString().trim();

N = Number(N);
let fibo = [];
fibo[0] = 0n;
fibo[1] = 1n;

for (let i = 2; i <= N; i++) {
  fibo[i] = fibo[i - 1] + fibo[i - 2];
}

console.log(fibo[N].toString());
