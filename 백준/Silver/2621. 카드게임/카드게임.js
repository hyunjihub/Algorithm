const fs = require('fs');
let cards = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let colorMap = new Map();
let numberMap = new Map();
for (let i = 0; i < 5; i++) {
  cards[i] = cards[i].trim().split(' ');
  if (colorMap.has(cards[i][0])) {
    colorMap.set(cards[i][0], [...colorMap.get(cards[i][0]), Number(cards[i][1])]);
  } else {
    colorMap.set(cards[i][0], [Number(cards[i][1])]);
  }

  if (numberMap.has(Number(cards[i][1]))) {
    numberMap.set(Number(cards[i][1]), [...numberMap.get(Number(cards[i][1])), cards[i][0]]);
  } else {
    numberMap.set(Number(cards[i][1]), [cards[i][0]]);
  }
}

let number = Array.from(numberMap.keys());
number.sort((a, b) => a - b);
let isConsecutive = true;
for (let i = 1; i < number.length; i++) {
  if (number[i] - number[i - 1] !== 1) {
    isConsecutive = false;
    break;
  }
}

let sameNum = [0, 0];
for (let num of numberMap) {
  if (sameNum[1] <= num[1].length && sameNum[0] < num[0]) {
    sameNum = [num[0], num[1].length];
  }
}

let score = 0;
if (colorMap.size === 1 && isConsecutive) {
  score += 900 + number[number.length - 1];
} else if (colorMap.size === 4 && sameNum[1] === 4) {
  score += sameNum[0] + 800;
} else if (sameNum[1] === 3 && numberMap.size === 2) {
  let two = 0;
  for (let num of numberMap) {
    if (sameNum[0] !== num[0]) two = num[0];
  }
  score += 700 + 10 * sameNum[0] + two;
} else if (colorMap.size === 1) {
  score += 600 + number[number.length - 1];
} else if (numberMap.size === 5 && isConsecutive) {
  score += 500 + number[number.length - 1];
} else if (sameNum[1] === 3) {
  score += 400 + sameNum[0];
} else if (sameNum[1] === 2 && numberMap.size === 3) {
  let second = 0;
  for (let num of numberMap) {
    if (num[0] !== sameNum[0] && num[1].length === 2) second = num[0];
  }
  score += 300 + 10 * sameNum[0] + second;
} else if (sameNum[1] === 2) {
  score += 200 + sameNum[0];
} else {
  let num = Array.from(numberMap.keys());
  score += 100 + Math.max(...num);
}

console.log(score);
