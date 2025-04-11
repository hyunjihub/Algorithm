const fs = require('fs');
let [N, pattern, ...file] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
pattern = pattern.trim().split('*');
file = file.map((i) => i.trim());

let answer = [];

for (let i = 0; i < N; i++) {
  const name = file[i];
  const prefix = pattern[0];
  const suffix = pattern[1];

  if (name.length < prefix.length + suffix.length) {
    answer.push('NE');
    continue;
  }

  if (name.startsWith(prefix) && name.endsWith(suffix)) {
    answer.push('DA');
  } else {
    answer.push('NE');
  }
}

console.log(answer.join('\n'));
