function solution(n) {
    var answer = [];
    let isPrime = false;
    for(let i=2; i<=n; i++) {
        isPrime = false;
        if(n%i===0) {
            while(true) {
                if(n%i!==0) break;
                isPrime = true;
                n /= i;
            }
            answer.push(i);
        }
    }
    return answer;
}