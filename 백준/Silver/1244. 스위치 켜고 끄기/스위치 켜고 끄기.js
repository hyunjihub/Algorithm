const fs = require('fs');
let [switchNum, status, studentNum, ...info] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

switchNum = Number(switchNum);
studentNum = Number(studentNum);
status = status.trim().split(' ').map(Number);
status.unshift(null);

for (let i = 0; i < studentNum; i++) {
  let [gender, num] = info[i].trim().split(' ').map(Number);

  if (gender === 1) {
    let current = num;
    while (true) {
      if (current > switchNum) break;
      status[current] = status[current] === 0 ? 1 : 0;
      current += num;
    }
  } else {
    let idx = 0;
    while (true) {
      if (num - idx < 1 || num + idx > switchNum) break;
      if (status[num - idx] === status[num + idx]) {
        status[num - idx] = status[num - idx] === 0 ? 1 : 0;
        if (idx !== 0) status[num + idx] = status[num + idx] === 0 ? 1 : 0;
      } else break;

      idx++;
    }
  }
}

let result = status.slice(1);
const maxPerLine = 20;
for (let i = 0; i < result.length; i += maxPerLine) {
  console.log(result.slice(i, i + maxPerLine).join(' '));
}
