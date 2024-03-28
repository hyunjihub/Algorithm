function solution(num_list, n) {
    var answer = [];
    let index = 0;
    for(let i=0; i<num_list.length; i=i+n) {
        answer[index++] = num_list[i];
    }
    return answer;
}