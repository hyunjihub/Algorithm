function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    let n = 1;
    while(true) {
        if(n%denom1===0 && n%denom2===0) break;
        n++;
    }
    numer1 *= (n/denom1);
    numer2 *= (n/denom2);
    let sum = numer1 + numer2;
    
    let div = 2;
    while(true) {
        if(div>n) break;
        if(n%div===0 && sum%div===0) {
            n /= div;
            sum /= div;
            div = 1;
        }
        div++;
    }
    answer.push(sum);
    answer.push(n);
    return answer;
}