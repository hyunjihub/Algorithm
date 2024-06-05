const fs = require('fs');
let [money, stock] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
stock = stock.trim().split(' ').map(Number);

let SM = Number(money.trim());
let JH = Number(money.trim());
let SM_stock = 0;
let JH_stock = 0;
let up = 0;
let down = 0;
for (let i = 0; i < stock.length - 1; i++) {
  if (stock[i] <= JH) {
    JH_stock += Math.floor(JH / stock[i]);
    JH -= stock[i] * Math.floor(JH / stock[i]);
  }
  if (i !== 0 && stock[i - 1] < stock[i]) {
    up++;
    down = 0;
  } else if (i !== 0 && stock[i - 1] > stock[i]) {
    down++;
    up = 0;
  }
  if (up >= 3) {
    SM += stock[i] * SM_stock;
    SM_stock = 0;
  } else if (down >= 3) {
    if (stock[i] < SM) {
      SM_stock += Math.floor(SM / stock[i]);
      SM -= stock[i] * Math.floor(SM / stock[i]);
    }
  }
}

let SM_result = SM + stock[stock.length - 1] * SM_stock;
let JH_result = JH + stock[stock.length - 1] * JH_stock;
if (SM_result > JH_result) console.log('TIMING');
else if (SM_result < JH_result) console.log('BNP');
else console.log('SAMESAME');
