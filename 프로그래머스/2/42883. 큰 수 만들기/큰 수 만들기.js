function solution(number, k) {
    let stack = [];
    for (let i = 0; i < number.length; i++) {
        let current = number[i];
        while (stack.length > 0 && k > 0 && stack[stack.length - 1] < current) {
            stack.pop();
            k--;
        }
        stack.push(current);
    }

    stack = k > 0 ? stack.slice(0, stack.length - k) : stack;
    return stack.join("");
}
