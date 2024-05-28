const fs = require('fs');
let [T, ...cases] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

T = Number(T);

let index = 0;
for (let i = 0; i < T; i++) {
  let answer = '0';
  let k = Number(cases[index++].trim());
  let words = new Array();
  for (let j = 0; j < k; j++) {
    words.push(cases[index++].trim().split(''));
  }

  let isFind = false;
  for (let j = 0; j < k; j++) {
    for (let l = 0; l < k; l++) {
      if (j === l) continue;
      let sum = words[j].concat(words[l]);
      if (sum.join('') === sum.reverse().join('')) {
        answer = sum.join('');
        isFind = true;
        break;
      }
    }
    if (isFind) break;
  }
  console.log(answer);
}
