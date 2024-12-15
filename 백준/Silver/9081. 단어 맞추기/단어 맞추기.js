const fs = require('fs');
let [T, ...word] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

T = Number(T);
let answer = '';
for (let i = 0; i < T; i++) {
  word[i] = word[i].trim();
  let charArr = word[i].split('');
  charArr.sort().reverse();
  if (charArr.join('') === word[i]) {
    answer += word[i] + '\n';
  } else {
    let index = -1;
    for (let j = word[i].length - 1; j > 0; j--) {
      if (word[i][j] > word[i][j - 1]) {
        index = j - 1;
        break;
      }
    }

    let rest = word[i].slice(index).split('');
    rest.sort();
    let targetChar = rest.find((char) => char > word[i][index]);
    let targetIndex = rest.indexOf(targetChar);
    [rest[0], rest[targetIndex]] = [rest[targetIndex], rest[0]];
    answer += word[i].slice(0, index) + rest[0] + rest.slice(1).sort().join('') + '\n';
  }
}

console.log(answer.trim());
