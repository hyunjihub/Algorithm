function solution(n) {
    var answer = [];
    let index = 0;
    while(n!==1) {
        answer[index++] = n;
        if(n%2===0) {
            n = n/2;
        } else {
            n = 3*n+1;
        }
    }
    answer[index] = 1;
    return answer;
}