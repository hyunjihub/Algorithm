var fs = require('fs');
let N = fs.readFileSync(0, 'utf-8').toString().trim();

let map = new Map();
for (let i = 0; i < N.length; i++) {
  let num = Number(N.charAt(i));
  if (num === 9) num = 6;
  if (map.has(num)) {
    if (num === 6) {
      map.set(num, map.get(num) + 0.5);
    } else {
      map.set(num, map.get(num) + 1);
    }
  } else {
    if (num === 6) {
      map.set(num, 0.5);
    } else {
      map.set(num, 1);
    }
  }
}

let set = Array.from(map);
set.sort((a, b) => b[1] - a[1]);
console.log(Math.ceil(set[0][1]));
