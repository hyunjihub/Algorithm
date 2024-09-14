const fs = require('fs');
let [time, ...chatting] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let S = time.trim().split(' ')[0].split(':').map(Number);
let E = time.trim().split(' ')[1].split(':').map(Number);
let Q = time.trim().split(' ')[2].split(':').map(Number);

let minuteS = S[0] * 60 + S[1];
let minuteE = E[0] * 60 + E[1];
let minuteQ = Q[0] * 60 + Q[1];

let enter = new Set();
let leave = new Set();
let count = 0;
for (let i = 0; i < chatting.length; i++) {
  let [chatTime, name] = chatting[i].trim().split(' ');
  chatTime = chatTime.split(':').map(Number);
  let minuteC = chatTime[0] * 60 + chatTime[1];

  if (minuteC <= minuteS) enter.add(name);
  else if (minuteC >= minuteE && minuteC <= minuteQ) {
    if (!leave.has(name) && enter.has(name)) {
      leave.add(name);
      count++;
    }
  }
}

console.log(count);
