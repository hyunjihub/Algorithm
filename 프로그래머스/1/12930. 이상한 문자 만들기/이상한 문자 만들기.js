function solution(s) {
    var answer = '';
    s = s.split(" ");
    let str = '';
    for(let i=0; i<s.length; i++) {
        str = s[i];
        for(let j=0; j<str.length; j++) {
            if(j%2===0) {
                answer += str.charAt(j).toUpperCase();
            } else {
                answer += str.charAt(j).toLowerCase();
            }
        }
        if(i!==s.length-1) {
            answer += " ";
        }
    }
    return answer;
}