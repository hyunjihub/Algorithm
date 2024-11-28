const fs = require('fs');
let [N, ...time] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
let classTime = [];

for (let i = 0; i < N; i++) {
  const [start, end] = time[i].trim().split(' ').map(Number);
  classTime.push({ time: start, isStart: 1 });
  classTime.push({ time: end, isStart: -1 });
}

classTime.sort((a, b) => {
  if (a.time === b.time) return a.isStart - b.isStart;
  return a.time - b.time;
});

let currentClassCount = 0;
let maximumClassCount = 0;

for (let event of classTime) {
  if (event.isStart === 1) {
    currentClassCount++;
  } else {
    currentClassCount--;
  }
  maximumClassCount = Math.max(maximumClassCount, currentClassCount);
}

console.log(maximumClassCount);
