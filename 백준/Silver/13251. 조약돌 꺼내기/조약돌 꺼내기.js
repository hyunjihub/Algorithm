const fs = require('fs');
let [M, probability, K] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

M = Number(M);
K = Number(K);
probability = probability.trim().split(' ').map(Number);
let N = 0;
for (let i = 0; i < probability.length; i++) {
  N += probability[i];
}

let answer = 0.0;
for (let i = 0; i < M; i++) {
  if (K > probability[i]) continue;
  let percentage = 1;
  let currentProbability = probability[i];
  let currentN = N;
  for (let j = 0; j < K; j++) {
    percentage *= currentProbability / currentN;
    currentProbability--;
    currentN--;
  }
  answer += percentage;
}

if (answer === 1) console.log('1.0');
else console.log(answer);
