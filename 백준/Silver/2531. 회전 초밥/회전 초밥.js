const fs = require('fs');
let [input, ...sushiBelt] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [N, d, k, c] = input.split(' ').map(Number);
sushiBelt = sushiBelt.map(Number);
sushiBelt = sushiBelt.concat(sushiBelt.slice(0, k - 1));

let max = 0;
let sushiCount = new Array(d + 1).fill(0);
let uniqueCount = 0;

function addSushi(sushi) {
  if (sushiCount[sushi] === 0) {
    uniqueCount++;
  }
  sushiCount[sushi]++;
}

function removeSushi(sushi) {
  if (sushiCount[sushi] === 1) {
    uniqueCount--;
  }
  sushiCount[sushi]--;
}

for (let i = 0; i < k; i++) {
  addSushi(sushiBelt[i]);
}

addSushi(c);

max = uniqueCount;

for (let i = k; i < N + k - 1; i++) {
  removeSushi(sushiBelt[i - k]);
  addSushi(sushiBelt[i]);

  max = Math.max(max, uniqueCount);
}

console.log(max);
