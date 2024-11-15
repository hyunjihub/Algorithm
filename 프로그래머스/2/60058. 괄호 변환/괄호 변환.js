function solution(p) {
    function isCorrectParentheses(str) {
        let balance = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === "(") balance++;
            else balance--;
            if (balance < 0) return false;
        }
        return balance === 0;
    }
    
    function sameParentheses(str) {
        if(str === "") return str;
        let left = 0;
        let right = 0;
        let u = "";
        let v = "";
        for(let i = 0; i < str.length; i++) {
            if(left !== 0 && left === right) {
                v = str.substring(i);
                break;
            }
            u += str[i];
            if(str[i] === "(") left++;
            else right++;
        }
        
        function parentheses(u, v) {
            let result = "(";
            result += sameParentheses(v);
            result += ")";
            
            let reversed = "";
            for (let i = 1; i < u.length - 1; i++) {
                reversed += (u[i] === "(") ? ")" : "(";
            }
            
            result += reversed;
            return result;
        }
        
        if (isCorrectParentheses(u)) {
            return u + sameParentheses(v);
        } else {
            return parentheses(u, v);
        }   
    }

    return sameParentheses(p);
}
