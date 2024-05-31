function solution(prices) {
    var answer = [];
    for(let i=0; i<prices.length; i++) {
        if(i===prices.length-1) {
            answer.push(0);
            break;
        }
        let time = 0;
        for(let j=i+1; j<prices.length; j++) {
            if(prices[j]<prices[i]) {
                answer.push(time+1);
                time = 0;
                break;
            } else {
                time++;
            }
            if(j===prices.length-1) answer.push(time);
        }
    }
    return answer;
}