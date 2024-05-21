const fs = require('fs');
let [N, ...chatting] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
let useEmoticon = new Set();
let count = 0;
for (let i = 0; i < chatting.length; i++) {
  if (chatting[i].trim() === 'ENTER') {
    useEmoticon.clear();
  } else {
    if (!useEmoticon.has(chatting[i].trim())) {
      useEmoticon.add(chatting[i].trim());
      count++;
    }
  }
}

console.log(count);