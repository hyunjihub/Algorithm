const fs = require('fs');
let [N, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);

let score = [0, 0];
let currentWin = null;
let prevGoal = 0;
let answer = [0, 0];
for (let i = 0; i < N; i++) {
  let goal = input[i].trim().split(' ');
  let time = goal[1].split(':');
  score[Number(goal[0]) - 1]++;
  if (score[0] !== score[1]) win = score[0] < score[1] ? 2 : 1;
  else win = null;
  let goalTime = Number(time[0]) * 60 + Number(time[1]);

  if (currentWin === win) {
    //이기는 사람 유지
    if (i === N - 1) {
      answer[currentWin - 1] += 48 * 60 - prevGoal;
    }
  } else {
    if (currentWin === null) {
      // 이기는 사람 변화 && 이전까진 동점
      currentWin = win;
      prevGoal = goalTime;
      if (i === N - 1) {
        answer[currentWin - 1] += 48 * 60 - prevGoal;
      }
    } else if (win === null) {
      // 동점됨
      answer[currentWin - 1] += goalTime - prevGoal;
      currentWin = win;
      prevGoal = goalTime;
    } else {
      // 이기는 사람 변화 && A->B로 변화
      answer[currentWin - 1] += goalTime - prevGoal;
      currentWin = win;
      prevGoal = goalTime;
      if (i === N - 1) {
        answer[currentWin - 1] += 48 * 60 - prevGoal;
      }
    }
  }
}

for (let i = 0; i < 2; i++) {
  let t = `${
    Math.floor(Math.floor(answer[i] / 60) / 10) === 0 ? `0${Math.floor(answer[i] / 60)}` : Math.floor(answer[i] / 60)
  }:${Math.floor((answer[i] % 60) / 10) === 0 ? `0${answer[i] % 60}` : answer[i] % 60}`;
  console.log(t);
}
