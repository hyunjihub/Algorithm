function solution(num_list, n) {
    var answer = [];
    let index = 0;
    for(let i=n-1; i<num_list.length; i++) {
        answer[index++] = num_list[i];
    }
    return answer; 
}