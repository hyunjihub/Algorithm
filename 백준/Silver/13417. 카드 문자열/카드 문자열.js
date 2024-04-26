const fs = require('fs');
const [cases, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let index = 0;
let N = 0;
let cards = [];
let words = '';
let answer = '';
for (let i = 0; i < Number(cases); i++) {
  words = '';
  N = Number(input[index++].trim());
  cards = input[index++].trim().split(' ');
  cardPush(0, 'front', '');
  cardPush(0, 'back', '');
  answer += words + '\n';
}
console.log(answer.trim());

function cardPush(depth, loc, str) {
  if (depth === N) {
    if (words === '' || words > str) {
      words = str;
    }
    return;
  }

  if (loc === 'front') {
    str = cards[depth] + str;
  } else {
    str += cards[depth];
  }

  if (str + cards[depth + 1] < cards[depth + 1] + str) {
    cardPush(depth + 1, 'back', str);
  } else {
    cardPush(depth + 1, 'front', str);
  }
}
