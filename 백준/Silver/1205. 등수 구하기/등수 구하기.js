const fs = require('fs');
let [n, rankig] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [N, newScore, P] = n.trim().split(' ').map(Number);
if (N === 0) {
  console.log(1);
} else {
  rankig = rankig.trim().split(' ').map(Number);

  rankig.push(newScore);
  rankig.sort((a, b) => b - a);

  let list = rankig.slice(0, P);
  let rest = rankig.slice(P);
  if (list[list.length - 1] > newScore) console.log(-1);
  else if (rest[0] === newScore) console.log(-1);
  else {
    let rank = 1;
    for (let i = 0; i < P; i++) {
      if (list[i] === newScore) {
        console.log(rank);
        break;
      } else {
        rank++;
      }
    }
  }
}
