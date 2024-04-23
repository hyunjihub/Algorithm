const fs = require('fs');
let [T, ...cases] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let command = '';
let current = [];
let direction = 'N';
let answer = '';
for (let i = 0; i < parseInt(T); i++) {
  current = [0, 0];
  command = cases[i].trim();
  min = [0, 0];
  max = [0, 0];
  for (let j = 0; j < command.length; j++) {
    if (command.charAt(j) === 'F') {
      if (direction === 'N') {
        current = [current[0], current[1] + 1];
      } else if (direction === 'S') {
        current = [current[0], current[1] - 1];
      } else if (direction === 'W') {
        current = [current[0] - 1, current[1]];
      } else {
        current = [current[0] + 1, current[1]];
      }

      if (current[0] < min[0]) min[0] = current[0];
      if (current[1] < min[1]) min[1] = current[1];
      if (current[0] > max[0]) max[0] = current[0];
      if (current[1] > max[1]) max[1] = current[1];
    } else if (command.charAt(j) === 'B') {
      if (direction === 'N') {
        current = [current[0], current[1] - 1];
      } else if (direction === 'S') {
        current = [current[0], current[1] + 1];
      } else if (direction === 'W') {
        current = [current[0] + 1, current[1]];
      } else {
        current = [current[0] - 1, current[1]];
      }

      if (current[0] < min[0]) min[0] = current[0];
      if (current[1] < min[1]) min[1] = current[1];
      if (current[0] > max[0]) max[0] = current[0];
      if (current[1] > max[1]) max[1] = current[1];
    } else if (command.charAt(j) === 'L') {
      if (direction === 'N') {
        direction = 'W';
      } else if (direction === 'S') {
        direction = 'E';
      } else if (direction === 'W') {
        direction = 'S';
      } else {
        direction = 'N';
      }
    } else {
      if (direction === 'N') {
        direction = 'E';
      } else if (direction === 'S') {
        direction = 'W';
      } else if (direction === 'W') {
        direction = 'N';
      } else {
        direction = 'S';
      }
    }
  }

  let width = max[0] - min[0];
  let height = max[1] - min[1];
  answer += width * height + '\n';
}
console.log(answer.trim());
