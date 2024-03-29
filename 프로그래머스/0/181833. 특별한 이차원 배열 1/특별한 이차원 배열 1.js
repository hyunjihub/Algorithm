function solution(n) {
    var answer = Array(n);
    let one = 0;
    for(let i=0; i<n; i++) {
        answer[i] = [];
        let one = 0;
        for(let j=0; j<n; j++) {
            if(j===i) {
                answer[i][j] = 1;
            } else {
                answer[i][j] = 0;
            }
            one++;
        } 
    }
    return answer;
}