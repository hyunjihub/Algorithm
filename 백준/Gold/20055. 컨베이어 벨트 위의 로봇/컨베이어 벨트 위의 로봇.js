const fs = require('fs');
let [input, A] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [N, K] = input.split(' ').map(Number);
A = A.trim().split(' ').map(Number);

const robots = new Array(N).fill(false);
let stage = 0;

const getZeroCount = (A) => A.reduce((acc, cur) => (cur === 0 ? acc + 1 : acc), 0);
const rotate = (A, robots) => {
  const last = A.pop();
  A.unshift(last);

  robots.pop();
  robots.unshift(false);
};

const moveRobots = (A, robots, N) => {
  for (let i = N - 2; i >= 0; i--) {
    if (!robots[i]) continue;

    if (!robots[i + 1] && A[i + 1] > 0) {
      robots[i + 1] = true;
      robots[i] = false;
      A[i + 1]--;
    }
  }
};

const addRobot = (A, robots) => {
  if (A[0] > 0) {
    A[0]--;
    robots[0] = true;
  }
};

const removeNthRobot = (robots, n) => {
  robots[n] = false;
};

while (getZeroCount(A) < K) {
  stage++;
  rotate(A, robots);
  if (robots[N - 1]) removeNthRobot(robots, N - 1);

  moveRobots(A, robots, N);
  if (robots[N - 1]) removeNthRobot(robots, N - 1);

  addRobot(A, robots);
}

console.log(stage);
