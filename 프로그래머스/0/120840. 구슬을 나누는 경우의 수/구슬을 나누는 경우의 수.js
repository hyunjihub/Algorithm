function solution(balls, share) {
    var answer = 0;
    balls = BigInt(balls);
    share = BigInt(share);
    
    answer = combination(balls)/(combination(balls-share)*combination(share));
    return answer;
}

function combination(n) {
    let result = BigInt(1);
    for(let i=1n; i<=n; i++) {
        result *= i;
    }
    return result;
}