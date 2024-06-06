var fs = require('fs');
let word = fs.readFileSync(0, 'utf-8').toString().trim();

let dictionary = new Set();
dictionary.add('c=');
dictionary.add('c-');
dictionary.add('c=');
dictionary.add('dz=');
dictionary.add('d-');
dictionary.add('lj');
dictionary.add('nj');
dictionary.add('s=');
dictionary.add('z=');

let count = 0;
for (let i = 0; i < word.length; i++) {
  let str = word.charAt(i);
  while (true) {
    if (i === word.length - 1) break;
    if (dictionary.has(str + word.charAt(i + 1))) {
      str += word.charAt(i + 1);
      i++;
    } else if (i + 2 < word.length && str + word.charAt(i + 1) === 'dz' && word.charAt(i + 2) === '=') {
      str += word.charAt(i + 1);
      i++;
    } else break;
  }
  count++;
}

console.log(count);
