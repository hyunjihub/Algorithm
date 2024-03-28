function solution(num_list) {
    var answer = num_list;
    let length = num_list.length;
    if(num_list[length-1]>num_list[length-2]) {
        answer[length] = num_list[length-1]-num_list[length-2];
    } else {
        answer[length] = num_list[length-1]*2;
    }
    return answer;
}