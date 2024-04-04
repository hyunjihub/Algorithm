function solution(n) {
    var answer = Array.from({length: n}, ()=>Array(n).fill(0));
    let num = 1;
    let row = 0, col = 0;
    for(let i=n; i>0; i-=2) {
        for(let j=0; j<i; j++) {
            answer[row][col++]=num++;
        }
        col--;
        row++;
        for(let j=0; j<i-1; j++) {
            answer[row++][col]=num++;
        }
        row--;
        col--;
        for(let j=0; j<i-1; j++) {
            answer[row][col--]=num++;
        }
        row--;
        col++;
        for(let j=0; j<i-2; j++) {
            answer[row--][col]=num++;
        }
        row++;
        col++;
    }
    return answer;
}