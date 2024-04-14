const fs = require('fs');
let [n, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let N = parseInt(n.trim().split(' ')[0]);
let M = parseInt(n.trim().split(' ')[1]);

let members = Array.from({ length: N }, () => []);
let idols = Array.from({ length: N });
let member = [];
let index = 0;
let member_n = 0;
for (let i = 0; i < N; i++) {
  idols[i] = input[index++].trim();
  member_n = parseInt(input[index++]);
  member = new Set();
  for (let j = 0; j < member_n; j++) {
    member.add(input[index++].trim());
  }
  members[i] = member;
}

let question = '';
let type = 0;
let answer = '';
let arr = [];
for (let i = index; i < input.length; i += 2) {
  question = input[i].trim();
  type = parseInt(input[i + 1].trim());
  if (type === 1) {
    for (let j = 0; j < N; j++) {
      if (members[j].has(question)) {
        answer += idols[j] + '\n';
        break;
      }
    }
  } else {
    for (let j = 0; j < N; j++) {
      if (idols[j] === question) {
        arr = Array.from(members[j]);
        arr.sort();
        for (let k = 0; k < arr.length; k++) {
          answer += arr[k] + '\n';
        }
      }
    }
  }
}

console.log(answer.trim());
