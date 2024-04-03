function solution(A, B) {
    var answer = 0;
    let end = '';
    while(true) {
        if(A===B) break;
        if(answer===A.length) {
            answer = -1;
            break;
        }
        
        end = A.charAt(A.length-1);
        A = end + A.substr(0, A.length-1);
        answer++;
    }
    return answer;
}