const fs = require('fs');
let [YT, YJ] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

YT = YT.trim().split(' ');
YJ = YJ.trim().split(' ');

let max = 0;
let min = 1001;
let num = [parseInt(YT[0]), parseInt(YT[1]), parseInt(YJ[0]), parseInt(YJ[1])];
for (let i = 0; i < num.length; i++) {
  if (max < num[i]) max = num[i];
  if (min > num[i]) min = num[i];
}

let all_prime = prime(min, max);
let YT_prime = [];
let YJ_prime = [];
let nesting = [];
for (let i = 0; i < all_prime.length; i++) {
  if (all_prime[i] >= num[0] && all_prime[i] <= num[1]) {
    if (!(all_prime[i] >= num[2] && all_prime[i] <= num[3])) {
      YT_prime.push(all_prime[i]);
    } else {
      nesting.push(all_prime[i]);
    }
  }
  if (all_prime[i] >= num[2] && all_prime[i] <= num[3]) {
    if (!(all_prime[i] >= num[0] && all_prime[i] <= num[1])) YJ_prime.push(all_prime[i]);
  }
}

if (YT_prime.length > YJ_prime.length) {
  console.log('yt');
} else if (YT_prime.length < YJ_prime.length) {
  console.log('yj');
} else {
  if (nesting.length % 2 === 0) {
    console.log('yj');
  } else {
    console.log('yt');
  }
}

function prime(start, end) {
  let prime = Array.from({ length: end + 1 }, () => true);
  let result = [];
  prime[0] = false;
  prime[1] = false;
  for (let i = 2; i <= end; i++) {
    if (prime[i]) {
      if (i >= start) result.push(i);
      for (let j = i * 2; j <= end; j += i) {
        prime[j] = false;
      }
    }
  }
  return result;
}
