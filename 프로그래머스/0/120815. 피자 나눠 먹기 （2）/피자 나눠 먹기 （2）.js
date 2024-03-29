function solution(n) {
    var answer = 1;
    if(n%6===0) {
        answer = n/6;
    } else {
        while((answer*6)%n!==0) {
            answer++;
        }
    }
    return answer;
}