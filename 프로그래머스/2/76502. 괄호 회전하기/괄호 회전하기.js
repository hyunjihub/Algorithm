function solution(s) {
    var answer = 0;
    s += s;
    let stack = [];
    for(let i=0; i<s.length/2; i++) {
        stack = [];
        if(s.charAt(i)==="[" || s.charAt(i)==="(" || s.charAt(i)==="{") {
            for(let j=i; j<i+(s.length/2); j++) {
                if(stack.length===0) stack.push(s.charAt(j));
                else {
                    if(stack[stack.length-1]==="(" && s.charAt(j)===")") {
                        stack.pop();
                    } else if(stack[stack.length-1]==="[" && s.charAt(j)==="]") {
                        stack.pop();
                    } else if(stack[stack.length-1]==="{" && s.charAt(j)==="}") {
                        stack.pop();
                    } else {
                        stack.push(s.charAt(j));
                    }
                }
            }
            if(stack.length===0) answer++;
        }
    }
    return answer;
}