function solution(todo_list, finished) {
    var answer = [];
    let index = 0;
    for(let i=0; i<finished.length; i++) {
        if(!finished[i]) {
            answer[index++] = todo_list[i];
        }
    }
    return answer;
}