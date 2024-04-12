function solution(s){
    var answer = false;
    let stack = [];
    for(let i=0; i<s.length; i++) {
        if(i===0) {
            stack.push(s.charAt(i));
        } else {
            if(s.charAt(i)===")" && stack[stack.length-1]==="(") {
                stack.pop();
            } else {
                stack.push(s.charAt(i));
            }
        }
    }
    if(stack.length===0) answer = true;
    return answer;
}