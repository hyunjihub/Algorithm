const fs = require('fs');
let [n, K] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [C, R] = n.trim().split(' ').map(Number);
let seat = Array.from({ length: R }, () => Array(C).fill(null));
K = Number(K);

if (K > C * R) console.log(0);
else {
  let current = [R - 1, 0];
  let currentDirection = 'up';
  for (let i = 1; i <= K; i++) {
    seat[current[0]][current[1]] = i;
    if (currentDirection === 'up') {
      if (current[0] - 1 < 0 || seat[current[0] - 1][current[1]]) {
        currentDirection = 'right';
        if (i !== K) current[1]++;
      } else if (i !== K) current[0]--;
    } else if (currentDirection === 'down') {
      if (current[0] + 1 >= R || seat[current[0] + 1][current[1]]) {
        currentDirection = 'left';
        if (i !== K) current[1]--;
      } else if (i !== K) current[0]++;
    } else if (currentDirection === 'left') {
      if (current[1] - 1 < 0 || seat[current[0]][current[1] - 1]) {
        currentDirection = 'up';
        if (i !== K) current[0]--;
      } else if (i !== K) current[1]--;
    } else {
      if (current[1] + 1 >= C || seat[current[0]][current[1] + 1]) {
        currentDirection = 'down';
        if (i !== K) current[0]++;
      } else if (i !== K) current[1]++;
    }
    if (i === K) console.log(`${current[1] + 1} ${Math.abs(R - current[0])}`);
  }
}
