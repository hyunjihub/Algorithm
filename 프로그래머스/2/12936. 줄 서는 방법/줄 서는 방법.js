function solution(n, k) {
    var answer = [];
    var numbers = Array.from({ length: n }, (_, i) => i + 1);

    function factorial(num) {
        if (num === 0 || num === 1) return 1;
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        return result;
    }

    k -= 1;
    while (n > 0) {
        let fact = factorial(n - 1);
        let idx = Math.floor(k / fact);
        answer.push(numbers[idx]);
        numbers.splice(idx, 1);
        k %= fact;
        n--;
    }

    return answer;
}
