const fs = require('fs');
let [N, ...channel] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
channel = channel.map((i) => i.trim());

function setChannel(type) {
  let order = '';
  for (let i = 0; i < channel.length; i++) {
    if (channel[i] === type) {
      for (let j = 0; j < i; j++) {
        order += '1';
      }
      for (let j = 0; j < i; j++) {
        if (type === 'KBS2' && j === 0) continue;
        order += '4';
      }
      channel.splice(i, 1);
      channel.unshift(type);
      break;
    }
  }

  return order;
}

console.log(setChannel('KBS1') + setChannel('KBS2'));
