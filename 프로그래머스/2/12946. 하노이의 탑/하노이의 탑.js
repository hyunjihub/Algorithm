function solution(n) {
    var answer = [[]];
    
    function hanoi(n, start, mid, end, result = []) {
        if (n === 1) {
            result.push([start, end]);
        } else {
            hanoi(n - 1, start, end, mid, result);
            result.push([start, end]);
            hanoi(n - 1, mid, start, end, result);
        }
        return result;
    }
    
    answer = hanoi(n, 1, 2, 3);
    
    return answer;
}