const fs = require('fs');
let [num, ...block] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [N, M, B] = num.trim().split(' ').map(Number);
block = block.map((i) => i.trim().split(' ').map(Number));

function getTime(height) {
  let remove = 0;
  let add = 0;
  let time = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (block[i][j] - height > 0) {
        remove += block[i][j] - height;
        time += 2 * (block[i][j] - height);
      } else if (block[i][j] - height < 0) {
        add += height - block[i][j];
        time += height - block[i][j];
      }
    }
  }

  if (B + remove >= add) return time;
  else return Infinity;
}

let minTime = Infinity;
let height = 0;
for (let h = 0; h <= 256; h++) {
  let time = getTime(h);
  if (minTime > time) {
    minTime = time;
    height = h;
  } else if (minTime === time) {
    height = h;
  }
}

console.log(minTime, height);
