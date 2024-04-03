function solution(code) {
    var answer = '';
    let mode = 0;
    for(let i=0; i<code.length; i++) {
        if(code.charAt(i)==='1') {
            mode = mode===0 ? 1 : 0;
        }
        else if(mode===0) {
            if(code.charAt(i)!=='1') {
                if(i%2===0) {
                    answer = answer + code.charAt(i);
                }
            } else {
                mode = 1;
            }
        } else {
            if(code.charAt(i)!=='1') {
                if(i%2===1) {
                    answer = answer + code.charAt(i);
                }
            } else {
                mode = 0;
            }
        }
    }
    
    if(answer.length===0) {
        answer = "EMPTY";
    }
    return answer;
}
