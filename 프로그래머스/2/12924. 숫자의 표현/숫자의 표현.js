function solution(n) {
    var answer = 0;
    let sum = 0;
    let add = 0;
    for(let i=1; i<=n/2; i++) {
        sum = 0;
        add = i;
        while(sum+add<=n) {
            sum += add;
            add++;
        }
        if(sum===n) answer++;
    }
    return answer+1;
}