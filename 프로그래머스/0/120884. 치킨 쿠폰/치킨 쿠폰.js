function solution(chicken) {
    var answer = 0;
    let coupons = chicken;
    while(true) {
        if(coupons<10) break;
        answer += Math.floor(coupons/10);
        coupons = Math.floor(coupons/10) + (coupons%10);
    }
    return answer;
}