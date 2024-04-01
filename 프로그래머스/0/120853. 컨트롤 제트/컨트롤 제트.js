function solution(s) {
    var answer = 0;
    s = s.split(" ");
    let stack = [];
    for(let i=0; i<s.length; i++) {
        if(s[i]==='Z') {
            stack.pop();
        } else {
            stack.push(parseInt(s[i]));
        }
    }
    for(let i=0; i<stack.length; i++) {
        answer += stack[i];
    }
    return answer;
}