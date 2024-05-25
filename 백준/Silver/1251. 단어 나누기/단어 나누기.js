var fs = require('fs');
let word = fs.readFileSync(0, 'utf-8').toString().trim();

let firstLength = 1;
let last = '';
let words = [];
while (true) {
  if (firstLength === word.length - 1) break;
  let first = word.slice(0, firstLength);
  let secondLength = 1;
  last = word.slice(firstLength);
  while (true) {
    if (secondLength === word.length - firstLength) break;
    let second = last.slice(0, secondLength);
    let third = last.slice(secondLength);
    words.push(
      first.split('').reverse().join('') + second.split('').reverse().join('') + third.split('').reverse().join('')
    );
    secondLength++;
  }
  firstLength++;
}

words.sort();
console.log(words[0]);
