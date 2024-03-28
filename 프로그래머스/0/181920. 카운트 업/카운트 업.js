function solution(start_num, end_num) {
    var answer = [];
    let index = 0;
    for(let i=start_num; i<=end_num; i++) {
        answer[index++] = i;
    }
    return answer;
}