const fs = require('fs');
let [N, ...num] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
num = num.map(BigInt);

let map = new Map();
for (let i = 0; i < N; i++) {
  if (map.has(num[i])) {
    map.set(num[i], map.get(num[i]) + 1);
  } else {
    map.set(num[i], 1);
  }
}

let arr = Array.from(map);
arr.sort((a, b) => {
  if (a[1] < b[1]) return 1;
  else if (a[1] > b[1]) return -1;
  else {
    if (a[0] < b[0]) return -1;
    else if (a[0] > b[0]) return 1;
    return 0;
  }
});

console.log(arr[0][0].toString());
