var fs = require('fs');
let str = fs.readFileSync(0, 'utf-8').toString().trim();

let set = new Set();
for (let i = 1; i <= str.length; i++) {
  for (let j = 0; j < str.length; j++) {
    set.add(str.substring(j, i + j));
  }
}

console.log(set.size);
