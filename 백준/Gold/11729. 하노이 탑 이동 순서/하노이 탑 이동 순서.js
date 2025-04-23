var fs = require('fs');
let N = fs.readFileSync(0, 'utf-8').toString().trim();

N = Number(N);

let answer = '';
let count = 0;
function hanoi(n, from, to, aux) {
  count++;
  if (n === 1) {
    answer += `${from} ${to}\n`;
    return;
  }

  hanoi(n - 1, from, aux, to);
  answer += `${from} ${to}\n`;
  hanoi(n - 1, aux, to, from);
}

hanoi(N, 1, 3, 2);
console.log(count);
console.log(answer.trim());
