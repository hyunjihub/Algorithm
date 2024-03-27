function solution(n) {
    var answer = [];
    let index = 0;
    for(let i=1; i<=n; i++) {
        if(i%2!==0) {
            answer[index++] = i;
        }
    }
    return answer;
}