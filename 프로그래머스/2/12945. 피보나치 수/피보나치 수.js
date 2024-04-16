function solution(n) {
    var answer = 0;
    
    let fibo = [0n, 1n];
    for(let i=2; i<=n; i++) {
        fibo.push(fibo[i-1]+fibo[i-2]);
    }
    answer = fibo[fibo.length-1]%1234567n;
    return answer;
}