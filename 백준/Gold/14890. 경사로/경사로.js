const fs = require('fs');
let [n, ...map] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [N, L] = n.trim().split(' ').map(Number);
for (let i = 0; i < N; i++) {
  map[i] = map[i].trim().split(' ').map(Number);
}

let answer = 0;

for (let i = 0; i < N; i++) {
  let same = 1;
  let isPossible = true;

  for (let j = 1; j < N; j++) {
    let diff = map[i][j] - map[i][j - 1];

    if (diff === 0) {
      same++;
    } else if (diff === 1) {
      if (same < L) {
        isPossible = false;
        break;
      }
      same = 1;
    } else if (diff === -1) {
      if (j + L - 1 >= N) {
        isPossible = false;
        break;
      }
      for (let k = 0; k < L; k++) {
        if (map[i][j + k] !== map[i][j]) {
          isPossible = false;
          break;
        }
      }
      if (!isPossible) break;
      j += L - 1;
      same = 0;
    } else {
      isPossible = false;
      break;
    }
  }

  if (isPossible) {
    answer++;
  }
}

for (let i = 0; i < N; i++) {
  let same = 1;
  let isPossible = true;

  for (let j = 1; j < N; j++) {
    let diff = map[j][i] - map[j - 1][i];

    if (diff === 0) {
      same++;
    } else if (diff === 1) {
      if (same < L) {
        isPossible = false;
        break;
      }
      same = 1;
    } else if (diff === -1) {
      if (j + L - 1 >= N) {
        isPossible = false;
        break;
      }
      for (let k = 0; k < L; k++) {
        if (map[j + k][i] !== map[j][i]) {
          isPossible = false;
          break;
        }
      }
      if (!isPossible) break;
      j += L - 1;
      same = 0;
    } else {
      isPossible = false;
      break;
    }
  }

  if (isPossible) {
    answer++;
  }
}

console.log(answer);
