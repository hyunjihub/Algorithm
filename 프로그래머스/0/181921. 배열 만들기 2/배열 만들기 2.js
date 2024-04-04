function solution(l, r) {
    var answer = [];
    for(let i=l; i<=r; i++) {
        if(check(i)) {
            answer.push(i);
        }
    }
    if(answer.length===0) {
        answer.push(-1);
    }
    return answer;
}

function check(num) {
    num = num.toString();
    for(let i=0; i<num.length; i++) {
        if(num.charAt(i)!=='5' && num.charAt(i)!=='0') {
            return false;
        }
    }
    return true;
}