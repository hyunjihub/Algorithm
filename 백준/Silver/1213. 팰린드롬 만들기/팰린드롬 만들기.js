var fs = require('fs');
let name = fs.readFileSync(0, 'utf-8').toString().trim();

name = name.split('');
name.sort();

let nameArr = Array.from({ length: name.length }, () => ' ');
let left = [];
let index = 0;
for (let i = 0; i < name.length; i++) {
  if (i !== name.length - 1 && name[i] === name[i + 1]) {
    nameArr[index] = name[i];
    nameArr[name.length - 1 - index] = name[i];
    i++;
    index++;
  } else {
    left.push(name[i]);
  }
}

if (left.length === 1) {
  nameArr[index] = left[0];
  console.log(nameArr.join(''));
} else if (left.length === 0) {
  console.log(nameArr.join(''));
} else {
  console.log("I'm Sorry Hansoo");
}
