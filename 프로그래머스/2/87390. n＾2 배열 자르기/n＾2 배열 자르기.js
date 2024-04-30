function solution(n, left, right) {
    var answer = [];
    let row = 0;
    let col = 0;
    for(let i=left; i<=right; i++) {
        row = Math.floor(i/n)+1;
        col = i%n+1;
        answer.push(Math.max(row, col));
    }
    
    return answer;
}