const numbers = Array.from({ length: 9999 }, (_, index) => index + 1);
const selfNumber = new Set(numbers);

let str = '';
let sum = 0;
for (let i = 1; i <= 10000; i++) {
  sum = i;
  str = i.toString();
  for (let j = 0; j < str.length; j++) {
    sum += Number(str.charAt(j));
  }
  if (sum > 10031) break;
  selfNumber.delete(sum);
}

let answer = Array.from(selfNumber);
console.log(answer.join('\n'));