const fs = require('fs');
let [N, length, price] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
length = length.trim().split(' ').map(Number);
price = price.trim().split(' ').map(Number);

let minPrice = 0;
for (let i = 0; i < N - 1; i++) {
  let nextGas = i;
  let move = 0;
  while (true) {
    if (nextGas === N - 1 || price[i] > price[nextGas]) break;
    nextGas++;
    move += length[nextGas - 1];
  }
  minPrice += price[i] * move;
  i = nextGas - 1;
}

console.log(minPrice);
