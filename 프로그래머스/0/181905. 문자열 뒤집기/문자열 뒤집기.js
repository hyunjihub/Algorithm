function solution(my_string, s, e) {
    var answer = '';
    let str = my_string.substr(s,e-s+1);
    let reverse = '';
    for(let i=str.length-1; i>=0; i--) {
        reverse += str.charAt(i);
    }
    
    let index = 0;
    for(let i=0; i<my_string.length; i++) {
        if(i>=s && i<=e) {
            answer += reverse.charAt(index++);
        } else {
            answer += my_string.charAt(i);
        }
    }
    return answer;
}