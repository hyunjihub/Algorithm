const fs = require('fs');
let [input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let s = Number(input.trim().split(' ')[0]);
let n = input.trim().split(' ')[1];

function left() {
  return '|'.padEnd(s + 2);
}

function right() {
  return '|'.padStart(s + 2);
}

function both() {
  return '|' + ' '.repeat(s) + '|';
}

function space() {
  return ' '.repeat(s + 2);
}

function horizontal() {
  return ' ' + '-'.repeat(s) + ' ';
}

let topH = [
  horizontal(),
  space(),
  horizontal(),
  horizontal(),
  space(),
  horizontal(),
  horizontal(),
  horizontal(),
  horizontal(),
  horizontal(),
];
let midH = [
  space(),
  space(),
  horizontal(),
  horizontal(),
  horizontal(),
  horizontal(),
  horizontal(),
  space(),
  horizontal(),
  horizontal(),
];
let bottomH = [
  horizontal(),
  space(),
  horizontal(),
  horizontal(),
  space(),
  horizontal(),
  horizontal(),
  space(),
  horizontal(),
  horizontal(),
];
let topV = [both(), right(), right(), right(), both(), left(), left(), right(), both(), both()];
let bottomV = [both(), right(), left(), right(), right(), right(), both(), right(), both(), right()];

let draw = [topH, topV, midH, bottomV, bottomH];

let answer = '';

for (let j = 0; j < draw.length; j++) {
  let currentDraw = draw[j];
  if (currentDraw === topV || currentDraw === bottomV) {
    for (let k = 0; k < s; k++) {
      for (let i = 0; i < n.length; i++) {
        let number = Number(n.charAt(i));
        answer += currentDraw[number] + ' ';
      }
      answer = answer + '\n';
    }
  } else {
    for (let i = 0; i < n.length; i++) {
      let number = Number(n.charAt(i));
      answer += currentDraw[number] + ' ';
    }
    answer = answer + '\n';
  }
}

console.log(answer);
