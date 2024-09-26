const fs = require('fs');
let [N, length, price] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
length = length.trim().split(' ').map(BigInt);
price = price.trim().split(' ').map(BigInt);

let minPrice = 0n;
for (let i = 0; i < N - 1; i++) {
  let nextGas = i;
  let move = 0n;
  while (true) {
    if (nextGas === N - 1 || price[i] > price[nextGas]) break;
    nextGas++;
    move = move + length[nextGas - 1];
  }
  minPrice += price[i] * move;
  i = nextGas - 1;
}

console.log(minPrice.toString());
