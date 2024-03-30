function solution(n) {
    var answer = 1;
    let mul = 1;
    while(true) {
        answer *= mul;
        if(answer===n) {
            answer = mul;
            break;
        } else if(answer>n) {
            answer = mul-1;
            break;
        }
        mul++;
    }
    return answer;
}