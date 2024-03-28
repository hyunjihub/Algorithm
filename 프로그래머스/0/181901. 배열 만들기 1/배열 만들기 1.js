function solution(n, k) {
    var answer = [];
    let index = 0;
    for(let i=1; i<=n; i++) {
        if(i%k===0) {
            answer[index++] = i;
        }
    }
    answer.sort((a, b)=>a-b);
    return answer;
}