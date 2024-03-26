function solution(numbers) {
    var answer = 0;
    numbers.sort((a,b)=>a-b);
    let length = numbers.length;
    answer = numbers[length-1] * numbers[length-2];
    return answer;
}