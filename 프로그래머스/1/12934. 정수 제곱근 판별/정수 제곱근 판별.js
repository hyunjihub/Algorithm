function solution(n) {
    var answer = -1;
    let sqrt = Math.sqrt(n);
    if(Number.isInteger(sqrt)) {
        answer = (sqrt+1)**2;
    }
    return answer;
}