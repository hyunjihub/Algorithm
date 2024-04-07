function solution(n) {
    var answer = 0;
    let prime = Array.from({length: n+1}, ()=>true);
    prime[0] = false;
    prime[1] = false;
    
    for(let i=2; i<=n; i++) {
        if(prime[i]) {
            answer++;
            for(let j=i*2; j<=n; j+=i) {
                prime[j] = false;
            }
        }
    }
    return answer;
}