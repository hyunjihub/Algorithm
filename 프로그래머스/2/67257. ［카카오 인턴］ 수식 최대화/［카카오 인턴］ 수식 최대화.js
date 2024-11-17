function solution(expression) {
    var answer = 0;
    const combinations = [
        ["+", "*", "-"],
        ["+", "-", "*"],
        ["*", "+", "-"],
        ["*", "-", "+"],
        ["-", "*", "+"],
        ["-", "+", "*"],
    ];
    
    function calculator(a, b, oper) {
        if (oper === "+") return a + b;
        if (oper === "*") return a * b;
        if (oper === "-") return a - b;
    }
    
    combinations.forEach((combination)=>{
        const operands = expression.match(/[0-9]+/g).map(Number);
        const operators = expression.match(/[\*\+\-]/g);
        combination.forEach((operator)=>{
            let idx = operators.indexOf(operator);
            while(idx!==-1) {
                operands[idx] = calculator(operands[idx], operands[idx + 1], operator);
                operands.splice(idx + 1, 1);
                operators.splice(idx, 1);
                idx = operators.indexOf(operator);
            } 
        })
        answer = Math.max(answer, Math.abs(operands[0]))
    });
    
    return answer;
}