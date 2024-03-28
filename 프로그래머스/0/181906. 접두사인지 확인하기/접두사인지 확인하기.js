function solution(my_string, is_prefix) {
    var answer = 1;
    for(let i=0; i<is_prefix.length; i++) {
        if(my_string.charAt(i)!==is_prefix.charAt(i)) {
            answer = 0;
        }
    }
    return answer;
}