function solution(my_string, is_suffix) {
    var answer = 0;
    let str = "";
    for(let i=0; i<is_suffix.length; i++) {
        str = my_string.charAt(my_string.length-1-i) + str;
    }
    if(is_suffix===str) {
        answer = 1;
    }
    return answer;
}