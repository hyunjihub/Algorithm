const fs = require('fs');
let [N, ...streetTrees] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
streetTrees = streetTrees.map(Number);

function GCD(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function findGCD(array) {
  let result = array[0];
  for (let i = 1; i < array.length; i++) {
    result = GCD(result, array[i]);
  }
  return result;
}

let diff = [];
for (let i = 0; i < N - 1; i++) {
  diff.push(streetTrees[i + 1] - streetTrees[i]);
}

let distance = findGCD(diff);

let count = 0;
for (let i = 1; i < N; i++) {
  count += (streetTrees[i] - streetTrees[i - 1]) / distance - 1;
}

console.log(count);
