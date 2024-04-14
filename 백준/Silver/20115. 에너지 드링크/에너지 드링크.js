const fs = require('fs');
const [n, input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
let drinks = input.trim().split(' ');

for (let i = 0; i < n; i++) {
  drinks[i] = parseInt(drinks[i]);
}

drinks.sort((a, b) => b - a);

let drink = drinks[0];
drinks.shift();
while (drinks.length >= 1) {
  drink += drinks[0] / 2;
  drinks.shift();
}

console.log(drink);
