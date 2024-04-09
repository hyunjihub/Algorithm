const fs = require('fs');
const [n, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 0; i < n; i++) {
  input[i] = input[i].trim().split(' ');
}

input.sort((a, b) => {
  if (a[1] === b[1]) {
    if (a[2] === b[2]) {
      if (a[3] === b[3]) {
        return lexicographical(a[0], b[0]);
      } else {
        return b[3] - a[3];
      }
    } else {
      return a[2] - b[2];
    }
  } else {
    return b[1] - a[1];
  }
});

let answer = '';
for (let i = 0; i < n; i++) {
  answer += input[i][0] + '\n';
}

console.log(answer.trim());

function lexicographical(a, b) {
  let length = 0;
  while (true) {
    if (a.length === length || b.length === length) break;
    if (a.charAt(length).charCodeAt() < b.charAt(length).charCodeAt()) {
      return -1;
    } else if (a.charAt(length).charCodeAt() > b.charAt(length).charCodeAt()) {
      return 1;
    } else {
      length++;
    }
  }
  return 0;
}
