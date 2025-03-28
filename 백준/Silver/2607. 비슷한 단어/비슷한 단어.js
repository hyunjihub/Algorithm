const fs = require('fs');
let [N, ...str] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
str = str.map((i) => i.trim());

let strMap = Array.from({ length: N }, () => new Map());
for (let i = 0; i < N; i++) {
  let map = strMap[i];
  for (let j = 0; j < str[i].length; j++) {
    if (map.has(str[i][j])) map.set(str[i][j], map.get(str[i][j]) + 1);
    else map.set(str[i][j], 1);
  }
}

function getDiff(map1, map2) {
  let diff = 0;

  for (let [char, count] of map1) {
    if (map2.has(char)) {
      diff += Math.abs(map2.get(char) - count);
    } else {
      diff += count;
    }
  }

  for (let [char, count] of map2) {
    if (!map1.has(char)) {
      diff += count;
    }
  }
  return diff;
}

let answer = 0;
for (let i = 1; i < N; i++) {
  let diff = getDiff(strMap[0], strMap[i]);
  if (str[0].length === str[i].length) {
    if (0 <= diff && diff <= 2) answer++;
  } else {
    if (0 <= diff && diff <= 1) answer++;
  }
}

console.log(answer);
