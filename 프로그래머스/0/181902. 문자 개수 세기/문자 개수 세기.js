function solution(my_string) {
    var answer = Array.from({ length: 52 }, () => 0);
    for(let i=0; i<my_string.length; i++) {
        if(my_string.charAt(i).charCodeAt()>=97) {
            answer[my_string.charAt(i).charCodeAt()-71]++;
        } else {
            answer[my_string.charAt(i).charCodeAt()-65]++;
        }
    }
    return answer;
}