function solution(my_string, indices) {
    var answer = '';
    for(let i=0; i<my_string.length; i++) {
        if(indices.indexOf(i)===-1) {
            answer += my_string.charAt(i);
        }
    }
    return answer;
}