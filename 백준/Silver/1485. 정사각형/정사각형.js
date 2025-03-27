const fs = require('fs');
let [T, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
T = Number(T);
let index = 0;

function distance(p1, p2) {
  return (p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2;
}

let answer = '';

for (let i = 0; i < T; i++) {
  let cases = [];
  for (let j = 0; j < 4; j++) {
    cases.push(input[index++].trim().split(' ').map(Number));
  }

  cases.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });

  let d1 = distance(cases[0], cases[1]);
  let d2 = distance(cases[1], cases[3]);
  let d3 = distance(cases[3], cases[2]);
  let d4 = distance(cases[2], cases[0]);

  let diag1 = distance(cases[0], cases[3]);
  let diag2 = distance(cases[1], cases[2]);

  if (d1 === d2 && d2 === d3 && d3 === d4 && diag1 === diag2) {
    answer += '1\n';
  } else {
    answer += '0\n';
  }
}

console.log(answer.trim());
