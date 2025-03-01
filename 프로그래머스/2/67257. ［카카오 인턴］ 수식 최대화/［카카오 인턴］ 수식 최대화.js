function solution(expression) {
    var answer = 0;
    const regex = /\d+|[+\-*]/g;
    const result = expression.match(regex);
    let num = result.filter((i, idx) => idx % 2 === 0).map(Number);
    let operator = result.filter((i, idx) => idx % 2 !== 0);

    const priority = [["+", "-", "*"], ["+", "*", "-"], ["*", "-", "+"], ["*", "+", "-"], ["-", "+", "*"], ["-", "*", "+"]];

    for (let i = 0; i < priority.length; i++) {
        let currentPriority = priority[i];
        let tempNum = [...num]; 
        let tempOperator = [...operator];

        for (let j = 0; j < currentPriority.length; j++) {
            let op = currentPriority[j];
            for (let k = 0; k < tempOperator.length; k++) {
                if (tempOperator[k] === op) {
                    if (op === "+") {
                        tempNum[k] = tempNum[k] + tempNum[k + 1];
                    } else if (op === "-") {
                        tempNum[k] = tempNum[k] - tempNum[k + 1];
                    } else if (op === "*") {
                        tempNum[k] = tempNum[k] * tempNum[k + 1];
                    }

                    tempNum.splice(k + 1, 1);
                    tempOperator.splice(k, 1);

                    k--;
                }
            }
        }

        answer = Math.max(answer, Math.abs(tempNum[0]));
    }

    return answer;
}
