const fs = require('fs');
let [T, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
T = Number(T);
let index = 0;

class Dequeue {
  constructor() {
    this.dequeue = {};
    this.front = 0;
    this.tail = 0;
  }

  pushFront(value) {
    this.dequeue[--this.front] = value;
  }

  pushBack(value) {
    this.dequeue[this.tail++] = value;
  }

  popFront() {
    if (this.front === this.tail) return null;
    else {
      let resullt = this.dequeue[this.front++];
      if (this.front === this.tail) {
        this.front = 0;
        this.tail = 0;
      }
      return resullt;
    }
  }

  popBack() {
    if (this.front === this.tail) return null;
    else {
      let result = this.dequeue[--this.tail];
      if (this.front === this.tail) {
        this.front = 0;
        this.tail = 0;
      }
      return result;
    }
  }

  get() {
    let result = [];
    for (let i = this.front; i < this.tail; i++) {
      if (this.dequeue[i] !== undefined) result.push(this.dequeue[i]);
    }
    return result;
  }
}

let answer = '';
for (let i = 0; i < T; i++) {
  let L = input[index++].trim().split('');
  let left = new Dequeue();
  let right = new Dequeue();

  for (let j = 0; j < L.length; j++) {
    if (L[j] === '<') {
      let value = left.popBack();
      if (value) right.pushFront(value);
    } else if (L[j] === '>') {
      let value = right.popFront();
      if (value) left.pushBack(value);
    } else if (L[j] === '-') {
      left.popBack();
    } else {
      left.pushBack(L[j]);
    }
  }
  let password = left.get().concat(right.get());
  answer += password.join('') + '\n';
}

console.log(answer.trim());
