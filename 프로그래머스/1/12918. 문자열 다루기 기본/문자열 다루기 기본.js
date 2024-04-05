function solution(s) {
    var answer = true;
    if(s.length===4 || s.length===6) {
        for(let i=0; i<s.length; i++) {
            if(isNaN(parseInt(s.charAt(i)))) {
                answer = false;
                break;
            }
        }
    } else {
        answer = false;
    }
    return answer;
}