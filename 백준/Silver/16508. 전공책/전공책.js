const fs = require('fs');
let [str, N, ...book] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

str = str.trim().split('').sort();
N = Number(N);

for (let i = 0; i < N; i++) {
  book[i] = book[i].trim().split(' ');
}

let min = Infinity;
function DFS(str, price, start) {
  if (str.length === 0) {
    if (min > price) {
      min = price;
    }
    return;
  }

  for (let i = start; i < N; i++) {
    let newStr = [...str];
    for (let word of book[i][1]) {
      const index = newStr.indexOf(word);
      if (index !== -1) {
        newStr.splice(index, 1).join('');
      }
    }

    DFS(newStr, price + Number(book[i][0]), i + 1);
  }
}

DFS([...str], 0, 0);
if (min === Infinity) console.log(-1);
else console.log(min);
