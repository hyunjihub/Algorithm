var fs = require('fs');
var N = fs.readFileSync(0, 'utf-8').toString().trim();

N = Number(N);
let participant = Array.from({ length: N }, (_, index) => index + 1);

let step = 1;
let currentIndex = 0;
while (participant.length !== 1) {
  let removeIndex = (currentIndex + (step ** 3 - 1)) % participant.length;
  participant.splice(removeIndex, 1);
  currentIndex = removeIndex % participant.length;
  step++;
}

console.log(participant[0]);
