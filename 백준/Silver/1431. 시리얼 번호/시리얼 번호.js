const fs = require('fs');
const [n, ...serials] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

serials.sort((a, b) => {
  a = a.trim();
  b = b.trim();

  let a_sum = 0;
  let b_sum = 0;
  if (a.length < b.length) return -1;
  else if (a.length > b.length) return 1;
  else {
    arr_a = a.split('');
    arr_b = b.split('');

    for (let i = 0; i < arr_a.length; i++) {
      if (!isNaN(+arr_a[i])) a_sum += +arr_a[i];
      if (!isNaN(+arr_b[i])) b_sum += +arr_b[i];
    }
    if (a_sum < b_sum) return -1;
    else if (a_sum > b_sum) return 1;
    else return a.localeCompare(b);
  }
});

console.log(serials.join('\n'));
