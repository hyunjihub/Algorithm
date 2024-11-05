const fs = require('fs');
let [n, m, t] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [w, h] = n.trim().split(' ').map(Number);
let [p, q] = m.trim().split(' ').map(Number);
t = Number(t);

p += t;
q += t;

let xCycle = 2 * w;
let yCycle = 2 * h;

let xPosition = p % xCycle;
if (xPosition > w) {
  xPosition = xCycle - xPosition;
}

let yPosition = q % yCycle;
if (yPosition > h) {
  yPosition = yCycle - yPosition;
}

console.log(xPosition, yPosition);
