var fs = require('fs');
let N = fs.readFileSync(0, 'utf-8').toString().trim();

N = N.split('').map(Number);
N.sort((a, b) => b - a);

if (!N.includes(0)) console.log(-1);
else {
  if (N.reduce((acc, cur) => acc + cur) % 3 === 0) {
    console.log(N.join(''));
  } else console.log(-1);
}
