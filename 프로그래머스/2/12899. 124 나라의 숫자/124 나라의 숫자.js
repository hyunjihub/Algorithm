function solution(n) {
    var answer = '';
    
    while(n>0) {
        let rest = n%3;
        n = Math.floor(n/3);
        
        if(rest===0) {
            answer = 4 + answer;
            n--;
        } else if(rest===1) {
            answer = 1 + answer;
        } else {
            answer = 2 + answer;
        }

    }

    return answer;
}