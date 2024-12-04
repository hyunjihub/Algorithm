const fs = require('fs');
let [n, ...sound] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [N, P] = n.trim().split(' ').map(Number);
let guitar = Array.from({ length: 7 }, () => []);
let count = 0;

for (let i = 0; i < N; i++) {
  let [line, fret] = sound[i].trim().split(' ').map(Number);

  if (guitar[line].length === 0) {
    guitar[line].push(fret);
    count++;
  } else {
    if (guitar[line][guitar[line].length - 1] > fret) {
      while (guitar[line].length > 0 && guitar[line][guitar[line].length - 1] > fret) {
        guitar[line].pop();
        count++;
      }

      if (guitar[line].length === 0 || guitar[line][guitar[line].length - 1] !== fret) {
        guitar[line].push(fret);
        count++;
      }
    } else {
      if (guitar[line][guitar[line].length - 1] !== fret) {
        guitar[line].push(fret);
        count++;
      }
    }
  }
}

console.log(count);
