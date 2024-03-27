function solution(n) {
    var answer = 0;
    let str = n.toString();
    for(let i=0; i<str.length; i++) {
        answer += Number(str.charAt(i));
    }
    return answer;
}