function solution(s)
{
    var answer = 0;
    let stack = [];

    for(let i=0; i<s.length; i++) {
        if(stack.length===0) {
            stack.push(s.charAt(i));
        } else {
            if(stack[stack.length-1]===s.charAt(i)) {
                stack.pop();
            } else {
                stack.push(s.charAt(i));
            }
        }
    }

    if(stack.length===0) answer = 1;
    return answer;
}