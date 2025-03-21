const fs = require('fs');
let [T, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

class Dequeue {
  constructor() {
    this.dequeue = {};
    this.rear = 0;
    this.tail = 0;
    this.direction = 1;
  }

  reverse() {
    this.direction *= -1;
  }

  isEmpty() {
    return this.rear === this.tail;
  }

  push(value) {
    this.dequeue[this.tail++] = value;
  }

  pop() {
    if (this.isEmpty()) return null;

    let result;
    if (this.direction === -1) {
      result = this.dequeue[--this.tail];
    } else {
      result = this.dequeue[this.rear++];
    }
    if (this.rear === this.tail) {
      this.rear = 0;
      this.tail = 0;
    }
    return result;
  }

  get() {
    return [this.dequeue, this.rear, this.tail, this.direction];
  }
}

T = Number(T);
let index = 0;
let answer = '';
for (let i = 0; i < T; i++) {
  let command = input[index++].trim().split('');
  let n = Number(input[index++]);
  let arr = input[index++].trim().replaceAll(',', ' ').replace('[', '').replace(']', '').split(' ').map(Number);
  let AC = new Dequeue();
  let isError = false;

  for (let j = 0; j < n; j++) {
    AC.push(arr[j]);
  }

  for (let j = 0; j < command.length; j++) {
    if (command[j] === 'R') {
      AC.reverse();
    } else {
      if (AC.pop() === null) {
        isError = true;
        break;
      }
    }
  }

  if (isError) answer += 'error\n';
  else {
    let [arr, start, end, direction] = AC.get();
    let result = Object.values(arr).slice(start, end);
    if (direction === -1) result.reverse();
    answer += `[${result.join(',')}]\n`;
  }
}

console.log(answer.trim());
