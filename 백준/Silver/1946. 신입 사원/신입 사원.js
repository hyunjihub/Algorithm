const fs = require('fs');
let [T, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

T = Number(T);
let index = 0;
for (let i = 0; i < T; i++) {
  let N = Number(input[index++]);
  let info = [];
  for (let j = 0; j < N; j++) {
    let [a, b] = input[index++].trim().split(' ').map(Number);
    info.push([a, b]);
  }

  let document = [...info].sort((a, b) => a[0] - b[0]);

  let minInterview = document[0][1];
  let answer = 1;
  for (let j = 1; j < N; j++) {
    let [dRank, iRank] = document[j];

    if (iRank < minInterview) {
      answer++;
      minInterview = iRank;
    }
  }
  console.log(answer);
}
