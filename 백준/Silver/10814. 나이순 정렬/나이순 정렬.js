const fs = require('fs');
let [N, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);

let users = [];
for (let i = 0; i < input.length; i++) {
  input[i] = input[i].trim().split(' ');
  users.push([[i, input[i][0]], input[i][1]]);
}

users.sort((a, b) => {
  if (Number(a[0][1]) < Number(b[0][1])) return -1;
  else if (Number(a[0][1]) > Number(b[0][1])) return 1;
  else return a[0][0] - b[0][0];
});

let answer = '';
for (let i = 0; i < users.length; i++) {
  answer += `${users[i][0][1]} ${users[i][1]}` + '\n';
}

console.log(answer.trim());
