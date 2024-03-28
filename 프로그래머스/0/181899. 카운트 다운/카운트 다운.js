function solution(start, end_num) {
    var answer = [];
    let index = 0;
    for(let i=start; i>=end_num; i--) {
        answer[index++] = i;
    }
    return answer;
}