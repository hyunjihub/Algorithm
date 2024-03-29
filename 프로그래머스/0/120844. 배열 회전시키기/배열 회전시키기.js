function solution(numbers, direction) {
    var answer = [];
    let start = 0;
    let index = 0;
    if(direction==='left') {
        start = numbers[0];
        for(let i=1; i<numbers.length; i++) {
            answer[index++] = numbers[i];
        }
        answer[index] = start;
    } else {
        answer[0] = numbers[numbers.length-1];
        for(let i=0; i<numbers.length-1; i++) {
            answer[i+1] = numbers[i];
        }
    }
    return answer;
}