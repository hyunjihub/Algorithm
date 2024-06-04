const fs = require('fs');
let [N, problems] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N.trim());
problems = problems.trim();

let B = 0;
let R = 0;
for (let i = 0; i < N; i++) {
  while (true) {
    if (i === N - 1 || problems[i] !== problems[i + 1]) {
      if (problems[i] === 'B') B++;
      else R++;
      break;
    }
    i++;
  }
}

console.log(1 + Math.min(B, R));
