const fs = require('fs');
let [...testCase] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let prime = Array.from({ length: 123456 * 2 + 1 }, () => true);
prime[0] = false;
prime[1] = false;

for (let i = 2; i < prime.length; i++) {
  if (!prime[i]) continue;
  for (let j = 2 * i; j < prime.length; j += i) prime[j] = false;
}

let answer = '';
for (let i = 0; i < testCase.length - 1; i++) {
  testCase[i] = Number(testCase[i].trim());

  let count = 0;
  for (let j = testCase[i] + 1; j <= 2 * testCase[i]; j++) {
    if (prime[j]) count++;
  }

  answer += count + '\n';
}
console.log(answer.trim());
