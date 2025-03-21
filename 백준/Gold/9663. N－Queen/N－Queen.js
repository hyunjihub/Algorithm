var fs = require('fs');
let N = fs.readFileSync(0, 'utf-8').toString().trim();

N = Number(N);
let answer = 0;
let board = Array.from({ length: N }, () => Array(N).fill(false));

function isPossible(row, col) {
  for (let i = 0; i < row; i++) {
    if (board[i][col]) return false;
  }

  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j]) return false;
  }

  for (let i = row - 1, j = col + 1; i >= 0 && j < N; i--, j++) {
    if (board[i][j]) return false;
  }

  return true;
}

function DFS(row) {
  if (row === N) {
    answer++;
    return;
  }

  for (let i = 0; i < N; i++) {
    if (isPossible(row, i)) {
      board[row][i] = true;
      DFS(row + 1);
      board[row][i] = false;
    }
  }
}

DFS(0);

console.log(answer);
