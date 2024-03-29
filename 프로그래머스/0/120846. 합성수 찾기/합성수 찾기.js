function solution(n) {
    var answer = 0;
    for(let i=1; i<=n; i++) {
        if(divisor(i)>=3) {
            answer++;
        }
    }
    return answer;
}

function divisor(n) {
    let num = 0;
    for(let i=1; i<=n; i++) {
        if(n%i===0) {
            num++;
        }
    }
    return num;
}