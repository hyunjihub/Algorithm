function solution(num_list) {
    var answer = [];
    num_list.sort((a, b)=> a-b);
    let index = 0;
    for(let i=5; i<num_list.length; i++) {
        answer[index++] = num_list[i];
    }
    return answer;
}