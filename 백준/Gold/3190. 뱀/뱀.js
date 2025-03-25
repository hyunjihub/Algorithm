const fs = require('fs');
let [N, K, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
K = Number(K);

let apple = input.slice(0, K).map((i) => i.trim().split(' ').map(Number));
let L = Number(input.slice(K, K + 1)[0]);
let direction = input.slice(K + 1).map((i) => i.trim().split(' '));

let board = Array.from({ length: N }, () => Array(N).fill(false));
for (let i = 0; i < K; i++) {
  let [y, x] = apple[i];
  board[--y][--x] = true;
}

class Dequeue {
  constructor() {
    this.dequeue = {};
    this.rear = 0;
    this.tail = 0;
    this.isContain = new Set();
  }

  pushFront(value) {
    this.rear--;
    this.dequeue[this.rear] = value;
    this.isContain.add(value.join('-'));
  }

  popBack() {
    if (this.rear === this.tail) return null;
    this.tail--;
    let result = this.dequeue[this.tail];
    this.isContain.delete(result.join('-'));
    return result;
  }

  peek() {
    if (this.rear === this.tail) return null;
    return this.dequeue[this.rear];
  }

  hasContain(value) {
    return this.isContain.has(value.join('-'));
  }

  get() {
    return this.dequeue;
  }
}

const dy = [0, 1, 0, -1];
const dx = [1, 0, -1, 0];
let snake = new Dequeue();
snake.pushFront([0, 0]);
let time = 1;
let currentDirection = 0;
let index = 0;

while (true) {
  let [idY, idX] = snake.peek();
  idY += dy[currentDirection];
  idX += dx[currentDirection];

  if (!snake.hasContain([idY, idX]) && idY >= 0 && idY < N && idX >= 0 && idX < N) {
    snake.pushFront([idY, idX]);
  } else break;

  if (!board[idY][idX]) snake.popBack();
  else board[idY][idX] = false;

  if (index < L && time === Number(direction[index][0])) {
    if (direction[index][1] === 'L') {
      currentDirection = (currentDirection - 1 + 4) % 4;
    } else {
      currentDirection = (currentDirection + 1) % 4;
    }
    index++;
  }
  time++;
}

console.log(time);
