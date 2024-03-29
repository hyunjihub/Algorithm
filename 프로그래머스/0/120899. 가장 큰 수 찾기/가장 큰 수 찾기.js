function solution(array) {
    var answer = [];
    let max = 0;
    for(let i=0; i<array.length; i++) {
        if(max<array[i]) {
            answer[0] = array[i];
            answer[1] = i;
            max = array[i];
        }
    }
    return answer;
}