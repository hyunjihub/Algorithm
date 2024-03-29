function solution(numLog) {
    var answer = '';
    let cal = 0;
    for(let i=0; i<numLog.length-1; i++) {
        cal = numLog[i]-numLog[i+1];
        if(cal===-1) {
            answer += "w";
        } else if(cal===1) {
            answer += "s";
        } else if(cal===-10) {
            answer += "d";
        } else {
            answer += "a";
        }  
    }
    return answer;
}