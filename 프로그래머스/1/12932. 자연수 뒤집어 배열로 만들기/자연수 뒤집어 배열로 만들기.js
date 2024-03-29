function solution(n) {
    var answer = [];
    n = n.toString();
    let index = 0;
    for(let i=n.length-1; i>=0; i--) {
        answer[index++] = Number(n.charAt(i));
    }
    return answer;
}