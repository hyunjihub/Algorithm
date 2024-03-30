function solution(s) {
    var answer = '';
    let count = Array(26).fill(0);
    let code = 0;
    for(let i=0; i<s.length; i++) {
        count[s.charAt(i).charCodeAt()-97]++;
    }
    for(let i=0; i<26; i++) {
        if(count[i]===1) {
            answer += String.fromCharCode(97+i);
        }
    }
    return answer;
}