function solution(numbers, k) {
    var answer = 0;
    for(let i=0; i<k-1; i++) {
        answer += 2;
        if(answer>=numbers.length) {
            answer -= numbers.length;
        }
    }
    return answer+1;
}