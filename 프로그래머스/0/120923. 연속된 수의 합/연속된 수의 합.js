function solution(num, total) {
    var answer = [];
    let sum = 0;
    for(let i=-1000;; i++) {
        sum = 0;
        for(let j=i; j<num+i; j++) {
            sum += j;
        }
        if(sum===total) {
            for(let j=i; j<num+i; j++) {
                answer.push(j);
            }
            break;
        }
    }
    return answer;
}