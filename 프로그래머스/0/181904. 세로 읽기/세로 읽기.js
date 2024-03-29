function solution(my_string, m, c) {
    var answer = '';
    for(let i=0; i<my_string.length; i=i+m) {
        answer += my_string.charAt(i+c-1);
    }
    return answer;
}