function solution(number) {
    var answer = 0;
    number = number.toString();
    for(let i=0; i<number.length; i++) {
        answer += parseInt(number.charAt(i));
    }
    answer %= 9;
    return answer;
}