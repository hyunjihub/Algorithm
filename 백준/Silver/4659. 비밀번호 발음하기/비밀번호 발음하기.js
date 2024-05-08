const fs = require('fs');
let input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

const vowels = ['a', 'e', 'i', 'o', 'u'];
let isAllow = true;
for (let i = 0; i < input.length - 1; i++) {
  isAllow = true;
  input[i] = input[i].trim();
  if (input[i].split('').some((char) => vowels.includes(char))) {
    for (let j = 0; j < input[i].length - 2; j++) {
      if (vowels.includes(input[i].charAt(j))) {
        if (vowels.includes(input[i].charAt(j + 1)) && vowels.includes(input[i].charAt(j + 2))) {
          isAllow = false;
        }
      } else {
        if (!vowels.includes(input[i].charAt(j + 1)) && !vowels.includes(input[i].charAt(j + 2))) {
          isAllow = false;
        }
      }
    }
    if (isAllow) {
      for (let j = 0; j < input[i].length - 1; j++) {
        if (input[i].charAt(j) !== 'e' && input[i].charAt(j) !== 'o' && input[i].charAt(j) === input[i].charAt(j + 1)) {
          isAllow = false;
        }
      }
    }
  } else {
    isAllow = false;
  }
  if (isAllow) {
    console.log(`<${input[i]}> is acceptable.`);
  } else {
    console.log(`<${input[i]}> is not acceptable.`);
  }
}
