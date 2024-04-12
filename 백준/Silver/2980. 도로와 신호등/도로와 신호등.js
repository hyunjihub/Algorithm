const fs = require('fs');
const [n, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let N = parseInt(n.split(' ')[0].trim());
let L = parseInt(n.split(' ')[1].trim());

for (let i = 0; i < input.length; i++) {
  input[i] = input[i].trim().split(' ');
}
let time = 0;
let traffic_light = 0;
let turn = 0;
let remaining = 0;

for (let i = 0; i < L; i++) {
  if (traffic_light < input.length && i === parseInt(input[traffic_light][0])) {
    turn = parseInt(input[traffic_light][1]) + parseInt(input[traffic_light][2]);
    remaining = time % turn;
    if (remaining <= parseInt(input[traffic_light][1])) {
      time += parseInt(input[traffic_light][1]) - remaining + 1;
    } else {
      time++;
    }
    traffic_light++;
  } else {
    time++;
  }
}

console.log(time);
