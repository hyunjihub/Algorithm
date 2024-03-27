function solution(numbers, num1, num2) {
    var answer = [];
    let index = 0;
    for(let i=num1; i<=num2; i++) {
        answer[index] = numbers[i];
        index++;
    }
    return answer;
}