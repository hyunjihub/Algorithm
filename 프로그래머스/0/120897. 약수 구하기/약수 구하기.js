function solution(n) {
    var answer = [];
    let index = 0;
    for(let i=1; i<=n; i++) {
        if(n%i===0) {
            answer[index++] = i;
        }
    }
    return answer;
}