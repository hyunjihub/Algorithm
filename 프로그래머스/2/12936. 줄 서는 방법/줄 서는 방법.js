function solution(n, k) {
    function factorial(num) {
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        return result;
    };
    
    let numbers = Array.from({ length: n }, (_, i) => i + 1);
    let result = [];
    let remaining = k - 1;
    
    for(let i=n; i>0; i--) {
        let fact = factorial(i-1);
        let cal = Math.floor(remaining/fact);
        result.push(numbers[cal]);
        numbers.splice(cal, 1);
        remaining %= fact;
    }
    
    return result;
}