function solution(x, n) {
    var answer = [];
    let count = 0;
    for(let i=x; ; i=i+x) {
        if(count===n) break;
        answer[count] = i;
        count++;
    }
    return answer;
}