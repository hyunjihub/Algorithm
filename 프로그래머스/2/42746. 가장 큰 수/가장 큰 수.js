function solution(numbers) {
    numbers = numbers.map(String);

    numbers.sort((a, b) => (b + a) - (a + b));
    
    let answer = numbers.join('');
    
    if (answer[0] === '0') {
        return '0';
    }
    
    return answer;
}
