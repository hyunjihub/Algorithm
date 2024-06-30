const fs = require('fs');
let [n, ...medal] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let N = Number(n.trim().split(' ')[0]);
let K = Number(n.trim().split(' ')[1]);

for (let i = 0; i < N; i++) {
  medal[i] = medal[i].trim().split(' ').map(Number);
}

medal.sort((a, b) => {
  if (a[1] < b[1]) return 1;
  else if (a[1] > b[1]) return -1;
  else {
    if (a[2] < b[2]) return 1;
    else if (a[2] > b[2]) return -1;
    else {
      if (a[3] < b[3]) return 1;
      else if (a[3] > b[3]) return -1;
      else return 0;
    }
  }
});

if (medal[0][0] === K) console.log(1);
else {
  let grade = 1;
  for (let i = 1; i < N; i++) {
    if (medal[i - 1][1] > medal[i][1]) grade++;
    else {
      if (medal[i - 1][2] > medal[i][2]) grade++;
      else {
        if (medal[i - 1][3] > medal[i - 1][3]) grade++;
      }
    }
    if (medal[i][0] === K) {
      console.log(grade);
      break;
    }
  }
}
