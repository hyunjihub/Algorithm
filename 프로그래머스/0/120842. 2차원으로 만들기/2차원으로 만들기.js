function solution(num_list, n) {
    var answer = [];
    let array_size = num_list.length/n;
    for(let i=0; i<array_size; i++) {
        answer[i] = [];
    }
    
    let index = 0;
    for(let i=0; i<array_size; i++) {
        for(let j=0; j<n; j++) {
            answer[i][j] = num_list[index++];
        }
    }
    return answer;
}