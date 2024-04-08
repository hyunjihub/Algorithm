function solution(s) {
    var answer = 0;
    let x = s.charAt(0);
    let str = x;
    let x_count = 1;
    let other_count = 0;
    if(s.length===1) {
        answer++;
    }
    for(let i=1; i<s.length; i++) {
        if(i===s.length-1) {
            answer++;
        }
        else {
            if(s.charAt(i)!==x) {
                other_count++;
            } else {
                x_count++;
            }
            str += s.charAt(i);
            if(other_count===x_count) {
                answer++;
                if(i!==s.length-1) {
                    x = s.charAt(i+1);
                    i++;
                    if(i==s.length-1) {
                        answer++;
                    }
                    x_count = 1;
                    other_count = 0;
                    str = x;
                }
            }
        }
    }
    return answer;
}