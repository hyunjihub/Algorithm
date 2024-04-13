function solution(s) {
    var answer = '';
    s = s.split(" ");
    for(let i=0; i<s.length; i++) {
        for(let j=0; j<s[i].length; j++) {
            if(!isNaN(parseInt(s[i].charAt(j)))) {
                answer += s[i].charAt(j);
            }
            else {
                if(j===0) {
                    answer += s[i].charAt(j).toUpperCase();
                } else {
                    answer += s[i].charAt(j).toLowerCase();
                }
            }
        }
        if(i!==s.length-1) answer += " ";
    }
    return answer;
}