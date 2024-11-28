const fs = require('fs');
let [N, ...dots] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
for (let i = 0; i < N; i++) {
  dots[i] = dots[i].trim().split('').map(Number);
}

function quadTree(start, size) {
  let [startY, startX] = start;
  let num = dots[startY][startX];

  for (let i = startY; i < startY + size; i++) {
    for (let j = startX; j < startX + size; j++) {
      if (dots[i][j] !== num) {
        const topLeft = quadTree([startY, startX], size / 2);
        const topRight = quadTree([startY, startX + size / 2], size / 2);
        const bottomLeft = quadTree([startY + size / 2, startX], size / 2);
        const bottomRight = quadTree([startY + size / 2, startX + size / 2], size / 2);
        return `(${topLeft}${topRight}${bottomLeft}${bottomRight})`;
      }
    }
  }

  return num.toString();
}

console.log(quadTree([0, 0], N));
