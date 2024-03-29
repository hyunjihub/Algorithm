function solution(numbers) {
    var answer = 0;
    numbers.sort((a,b)=> a-b);
    answer = numbers[0]*numbers[1];
    if(numbers[numbers.length-1]*numbers[numbers.length-2]>answer) {
        answer = numbers[numbers.length-1]*numbers[numbers.length-2];
    }
    return answer;
}