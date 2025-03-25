const fs = require('fs');
let [N, ...S] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
S = S.map((i) => i.trim().split(' ').map(Number));

let min = Infinity;

function getTeamScore(team) {
  let score = 0;
  let size = team.length;
  for (let i = 0; i < size; i++) {
    for (let j = i + 1; j < size; j++) {
      score += S[team[i]][team[j]] + S[team[j]][team[i]];
    }
  }
  return score;
}

function DFS(index, teamA) {
  if (teamA.length > 0 && teamA.length < N) {
    let teamB = [];
    for (let i = 0; i < N; i++) {
      if (!teamA.includes(i)) teamB.push(i);
    }

    let scoreA = getTeamScore(teamA);
    let scoreB = getTeamScore(teamB);
    min = Math.min(min, Math.abs(scoreA - scoreB));
  }

  for (let i = index; i < N; i++) {
    teamA.push(i);
    DFS(i + 1, teamA);
    teamA.pop();
  }
}

DFS(0, []);
console.log(min);
