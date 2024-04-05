function solution(n, m) {
    var answer = [];
    let min = 0;
    let max = 0;
    if(n>=m) {
        min = m;
        max = n;
    } else {
        min = n;
        max = m;
    }
    
    let divisor = 0;
    for(let i=1; i<=min; i++) {
        if(n%i===0 && m%i===0) {
            divisor = i;
        }
    }
    answer.push(divisor);
    while(true) {
        if(max%n===0 && max%m===0) {
            answer.push(max);
            break;
        }
        max++;
    }
    return answer;
}