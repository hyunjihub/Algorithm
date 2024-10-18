const fs = require('fs');
let [T, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let index = 0;
let answer = '';
for (let i = 0; i < Number(T); i++) {
  let N = Number(input[index++]);
  let players = input[index++].trim().split(' ').map(Number);

  let team = new Map();
  for (let j = 0; j < N; j++) {
    if (team.has(players[j])) {
      team.set(players[j], [...team.get(players[j]), `${players[j]}_${j}`]);
    } else {
      team.set(players[j], [`${players[j]}_${j}`]);
    }
  }

  let validTeam = [];
  let teamCount = 0;
  for (let member of team) {
    if (member[1].length < 6) team.delete(member[0]);
    else {
      validTeam.push(...member[1]);
    }
    teamCount++;
  }

  validTeam.sort((a, b) => {
    let rankA = a.split('_').map(Number)[1];
    let rankB = b.split('_').map(Number)[1];

    if (rankA < rankB) return -1;
    else return 1;
  });

  let score = Array.from({ length: teamCount }, () => [0, 0, Infinity, 0]);
  let point = 1;
  for (let j = 0; j < validTeam.length; j++) {
    let [teamNum, rank] = validTeam[j].split('_').map(Number);
    if (score[teamNum - 1][1] < 4) {
      score[teamNum - 1][0] += point;
      score[teamNum - 1][1]++;
    } else {
      score[teamNum - 1][2] = Math.min(score[teamNum - 1][2], j);
    }
    score[teamNum - 1][3] = teamNum;
    point++;
  }

  score.sort((a, b) => {
    if (a[0] < b[0]) return -1;
    else if (a[0] > b[0]) return 1;
    else {
      if (a[2] < b[2]) return -1;
      else return 1;
    }
  });

  let filteredScore = score.filter((item) => !item.every((val, index) => val === [0, 0, Infinity, 0][index]));

  answer += filteredScore[0][3] + '\n';
}

console.log(answer.trim());
