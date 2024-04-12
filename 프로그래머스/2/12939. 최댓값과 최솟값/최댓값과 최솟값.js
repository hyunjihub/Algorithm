function solution(s) {
    var answer = '';
    s = s.split(" ");
    s.sort((a, b)=>a-b);
    answer += s[0] + " " + s[s.length-1];
    return answer;
}