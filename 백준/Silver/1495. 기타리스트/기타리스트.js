const fs = require('fs');
let [n, volume] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [N, S, M] = n.trim().split(' ').map(Number);
volume = volume.trim().split(' ').map(Number);

let cases = new Set([S]);

for (let i = 0; i < N; i++) {
  let tmp = new Set();
  for (let v of cases) {
    let plus = v + volume[i];
    let minus = v - volume[i];
    if (plus >= 0 && plus <= M) tmp.add(plus);
    if (minus >= 0 && minus <= M) tmp.add(minus);
  }
  if (tmp.size === 0) {
    console.log(-1);
    return;
  }
  cases = tmp;
}

console.log(Math.max(...cases));
