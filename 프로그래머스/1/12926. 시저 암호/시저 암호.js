function solution(s, n) {
    var answer = '';
    let code = 0;
    let upper = false;
    for(let i=0; i<s.length; i++) {
        if(s.charAt(i)===' ') {
            answer += ' ';
            continue;
        }
        upper = s.charAt(i) === s.charAt(i).toUpperCase();
        code = (s.charAt(i)).charCodeAt()+n;
        
        if(upper && code>=91) {
            code -= 26;
        } else if(code>=123) {
            code -= 26;
        }
        answer += String.fromCharCode(code);
    }
    return answer;
}

