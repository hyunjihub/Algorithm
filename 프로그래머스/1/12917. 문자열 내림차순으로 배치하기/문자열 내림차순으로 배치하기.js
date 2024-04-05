function solution(s) {
    var answer = '';
    s=s.split("");
    s.sort();
    for(let i=s.length-1; i>=0; i--) {
        answer += s[i];
    }
    return answer;
}