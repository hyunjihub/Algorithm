function solution(number, limit, power) {
    var answer = 0;
    let ATK = 0;
    for(let i=1; i<=number; i++) {
        ATK = factor_n(i);
        if(ATK>limit) {
            ATK = power;
        }
        answer += ATK;
    }
    return answer;
}

function factor_n(n) {
    let result = 0;
    for(let i=1; i<=Math.sqrt(n); i++) {
        if(n%i===0) {
            if(n/i!==i) result+=2;
            else result++;
        }
    }
    return result;
}