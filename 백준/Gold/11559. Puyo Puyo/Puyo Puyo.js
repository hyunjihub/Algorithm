const fs = require('fs');
let [...board] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

board = board.map((i) => i.trim().split(''));
let visited = Array.from({ length: 12 }, () => Array(6).fill(false));
let answer = 0;

let move = [
  [0, 1],
  [0, -1],
  [-1, 0],
  [1, 0],
];

function BFS(start) {
  let queue = [start];
  visited[start[0]][start[1]] = true;
  let group = [];

  while (queue.length) {
    let [idY, idX] = queue.shift();
    group.push([idY, idX]);

    for (let i = 0; i < 4; i++) {
      let newY = idY + move[i][0];
      let newX = idX + move[i][1];

      if (
        newY >= 0 &&
        newY < 12 &&
        newX >= 0 &&
        newX < 6 &&
        !visited[newY][newX] &&
        board[start[0]][start[1]] === board[newY][newX]
      ) {
        queue.push([newY, newX]);
        visited[newY][newX] = true;
      }
    }
  }

  return group;
}

function deletePuyo(arr) {
  for (let i = 0; i < arr.length; i++) {
    let [y, x] = arr[i];
    board[y][x] = '.';
    for (let j = y; j > 0; j--) {
      if (j - 1 >= 0 && board[j - 1][x] !== '.') {
        [board[j][x], board[j - 1][x]] = [board[j - 1][x], board[j][x]];
      } else break;
    }
  }
}

function playPuyo() {
  visited = Array.from({ length: 12 }, () => Array(6).fill(false));
  let deleteIdx = [];

  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 6; j++) {
      if (!visited[i][j] && board[i][j] !== '.') {
        let group = BFS([i, j]);
        if (group.length >= 4) {
          deleteIdx.push(...group);
        }
      }
    }
  }

  if (deleteIdx.length > 0) {
    deleteIdx.sort((a, b) => a[0] - b[0]);
    deletePuyo(deleteIdx);
    playPuyo();
    answer++;
  }
}

playPuyo();
console.log(answer);
