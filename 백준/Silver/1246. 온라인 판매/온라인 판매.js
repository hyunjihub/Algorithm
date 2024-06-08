const fs = require('fs');
let [n, ...prices] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let N = Number(n.trim().split(' ')[0]);
let M = Number(n.trim().split(' ')[1]);

prices.sort((a, b) => Number(b.trim()) - Number(a.trim()));

let max = 0;
let price = 0;
for (let i = 0; i < M; i++) {
  if (i + 1 > N) break;
  prices[i] = Number(prices[i].trim());
  let cal = (i + 1) * prices[i];
  if (cal >= max) {
    max = cal;
    price = prices[i];
  }
}

console.log(`${price} ${max}`);
