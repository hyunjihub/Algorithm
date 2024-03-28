function solution(my_string) {
    var answer = '';
    for(let i=0; i<my_string.length; i++) {
        if(my_string.charAt(i).charCodeAt()>90) {
            answer += my_string.charAt(i).toUpperCase();
        } else {
            answer += my_string.charAt(i).toLowerCase();
        }
    }
    return answer;
}