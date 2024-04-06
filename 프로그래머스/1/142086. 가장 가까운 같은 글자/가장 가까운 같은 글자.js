function solution(s) {
    var answer = [];
    let set = new Set();
    for(let i=0; i<s.length; i++) {
        if(set.has(s.charAt(i))) {
            for(let j=i-1; j>=0; j--) {
                if(s.charAt(j)===s.charAt(i)) {
                    answer.push(i-j);
                    break;
                }
            }
        } else {
            set.add(s[i]);
            answer.push(-1);
        }
    }
    return answer;
}