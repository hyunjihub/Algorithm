function solution(my_string, overwrite_string, s) {
    var answer = '';
    let index = 0;
    for(let i=0; i<my_string.length; i++) {
        if(s<=i && overwrite_string.length+s-1>=i) {
            answer += overwrite_string.charAt(index++);
        } else {
            answer += my_string.charAt(i);
        }
    }
    return answer;
}