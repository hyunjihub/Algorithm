const fs = require('fs');
let [N, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
for (let i = 0; i < N; i++) {
  input[i] = input[i].trim().split(' ').map(Number);
}

let max = 0;
function consulting(day, price) {
  if (day === N + 1) {
    if (max < price) {
      max = price;
    }
    return;
  }

  consulting(day + 1, price);
  if (day + input[day - 1][0] <= N + 1) {
    consulting(day + input[day - 1][0], price + input[day - 1][1]);
  }
}
consulting(1, 0);

console.log(max);
