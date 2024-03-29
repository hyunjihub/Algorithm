function solution(names) {
    var answer = [];
    let index = 0;
    for(let i=0; i<names.length; i=i+5) {
        answer[index++] = names[i];
    }
    return answer;
}