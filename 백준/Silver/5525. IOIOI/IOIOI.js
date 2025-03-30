const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.trim());

const N = +input.shift();
const M = +input.shift();
const S = input.shift();

function solution() {
    let count = 0;                // 'IOI' 패턴을 찾은 횟수
    let result = 0;               // 원하는 패턴을 찾은 횟수
    let i = 0;
    
    while (i < M - 1) {
      if (S[i] === 'I' && S.slice(i, i + 3) === 'IOI') {  // 'IOI' 패턴 찾기
        count += 1;               // 'IOI' 패턴이 연속되는 수를 세기
        if (count >= N) {
          result += 1;            // 'IOI'가 N번 이상 연속되면 패턴을 찾은 것으로 간주
        }
        i += 2;                   // 'IOI' 패턴을 찾으면 두 칸 이동
      } else {
        count = 0;                // 패턴이 끊기면 count 초기화
        i += 1;
      }
    }
    
    console.log(result);
}

solution();