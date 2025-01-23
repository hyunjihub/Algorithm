const fs = require('fs');
let [A, B] = fs.readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);

let eratosthenes = Array.from({ length: B + 1 }, () => true);
eratosthenes[0] = false;
eratosthenes[1] = false;

for (let i = 2; i <= B; i++) {
  for (let j = i + i; j <= B; j += i) {
    eratosthenes[j] = false;
  }
}

let underPrime = Array.from({ length: B - A + 1 }, () => [0, 0]);
for (let i = 0; i < underPrime.length; i++) {
  underPrime[i][0] = A + i;
}

for (let i = 2; i <= B; i++) {
  if (eratosthenes[i]) {
    for (let j = 0; j < underPrime.length; j++) {
      while (underPrime[j][0] % i === 0) {
        underPrime[j][1] += 1;
        underPrime[j][0] /= i;
      }
    }
  }
}

let sum = 0;
for (let i = 0; i < underPrime.length; i++) {
  if (eratosthenes[underPrime[i][1]]) sum++;
}

console.log(sum);
