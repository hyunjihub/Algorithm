var fs = require('fs');
let N = fs.readFileSync(0, 'utf-8').toString().trim();

let max = 0;
let min = Infinity;

function cut(num, count) {
  for (let i = 0; i < num.length; i++) {
    if (Number(num[i]) % 2 !== 0) count++;
  }

  if (num.length === 1) {
    max = Math.max(max, count);
    min = Math.min(min, count);
    return;
  } else if (num.length === 2) {
    const sum = (Number(num[0]) + Number(num[1])).toString();
    cut(sum, count);
  } else {
    for (let i = 1; i < num.length; i++) {
      for (let j = i + 1; j < num.length; j++) {
        let part1 = num.slice(0, i);
        let part2 = num.slice(i, j);
        let part3 = num.slice(j);

        const sum = (Number(part1) + Number(part2) + Number(part3)).toString();
        cut(sum, count);
      }
    }
  }
}

cut(N, 0);

console.log(min, max);
