var fs = require('fs');
let IPv6 = fs.readFileSync(0, 'utf-8').toString().trim();

let parts = IPv6.split('::');
let expanded = [];

if (parts.length === 1) {
  expanded = parts[0].split(':').map((x) => x.padStart(4, '0'));
} else {
  let left = parts[0] ? parts[0].split(':').map((x) => x.padStart(4, '0')) : [];
  let right = parts[1] ? parts[1].split(':').map((x) => x.padStart(4, '0')) : [];

  let missing = 8 - (left.length + right.length);
  expanded = [...left, ...Array(missing).fill('0000'), ...right];
}

console.log(expanded.join(':'));
