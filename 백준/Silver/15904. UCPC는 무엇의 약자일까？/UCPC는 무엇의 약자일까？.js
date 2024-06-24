var fs = require('fs');
let string = fs.readFileSync(0, 'utf-8').toString().trim();

let upper = '';
for (let i = 0; i < string.length; i++) {
  if (65 <= string.charAt(i).charCodeAt() && string.charAt(i).charCodeAt() <= 90) {
    upper += string.charAt(i);
  }
}

let UCPC = ['U', 'C', 'P', 'C'];
let start = 0;
let current = 0;
while (true) {
  if (start === upper.length) break;
  if (current === UCPC.length) break;

  if (upper[start] === UCPC[current]) current++;
  start++;
}

if (current === 4) console.log('I love UCPC');
else console.log('I hate UCPC');
