const fs = require('fs');
let [n, ...player] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let p = Number(n.trim().split(' ')[0]);
let m = Number(n.trim().split(' ')[1]);

let room = [];

for (let i = 0; i < p; i++) {
  let [level, id] = player[i].trim().split(' ');
  let isEnter = false;
  for (let j = 0; j < room.length; j++) {
    if (room[j].length < m && Number(level) >= room[j][0][0] - 10 && Number(level) <= room[j][0][0] + 10) {
      room[j].push([Number(level), id]);
      isEnter = true;
      break;
    }
  }
  if (!isEnter) room.push([[Number(level), id]]);
}

let answer = '';
for (let i = 0; i < room.length; i++) {
  if (room[i].length === m) answer += 'Started!' + '\n';
  else answer += 'Waiting!' + '\n';

  answer +=
    room[i]
      .sort((a, b) => a[1].localeCompare(b[1]))
      .map((item) => `${item[0]} ${item[1]}`)
      .join('\n') + '\n';
}

console.log(answer.trim());
