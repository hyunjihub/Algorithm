const fs = require('fs');
let [N, figure, k] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
k = Number(k);
figure = figure
  .trim()
  .split(' ')
  .map((num) => [Number(num)]);

let nth = 2;
let index = 0;
while (true) {
  index = 0;
  for (let i = 0; i < figure.length; i += 2) {
    figure[index] = figure[i].concat(figure[i + 1]);
    figure[index++].sort((a, b) => a - b);
  }
  figure = figure.slice(0, index);
  if (N / nth === k) break;
  nth *= 2;
}

let answer = '';
for (let i = 0; i < index; i++) {
  answer += figure[i].join(' ') + ' ';
}

console.log(answer.trim());
