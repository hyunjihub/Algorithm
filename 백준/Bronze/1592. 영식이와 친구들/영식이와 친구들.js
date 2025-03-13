var fs = require('fs');
let input = fs.readFileSync(0, 'utf-8').toString().trim();

let [N, M, L] = input.trim().split(' ').map(Number);
let catchCount = Array.from({ length: N + 1 }, () => 0);

if (M === 1) {
  console.log(0);
} else {
  let current = 1;
  catchCount[1] = 1;
  let count = 1;

  while (true) {
    if (catchCount[current] % 2 !== 0) {
      current = (current + L) % N;
      if (current === 0) current = N;
    } else {
      current = (current - L + N) % N;
      if (current === 0) current = N;
    }
    catchCount[current]++;
    if (catchCount[current] >= M) break;
    count++;
  }

  console.log(count);
}
