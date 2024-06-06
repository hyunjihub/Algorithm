const fs = require('fs');
let [n, ...words] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let N = Number(n.trim().split(' ')[0]);
let M = Number(n.trim().split(' ')[1]);

let vocabularyBook = new Map();
for (let i = 0; i < words.length; i++) {
  words[i] = words[i].trim();
  if (words[i].length >= M) {
    if (vocabularyBook.has(words[i])) {
      vocabularyBook.set(words[i], vocabularyBook.get(words[i]) + 1);
    } else {
      vocabularyBook.set(words[i], 1);
    }
  }
}

let array = Array.from(vocabularyBook);
array.sort((a, b) => {
  if (a[1] < b[1]) return 1;
  else if (a[1] > b[1]) return -1;
  else {
    if (a[0].length < b[0].length) return 1;
    else if (a[0].length > b[0].length) return -1;
    else {
      return a[0].localeCompare(b[0]);
    }
  }
});

const result = array.map((item) => item[0]);
console.log(result.join('\n'));
