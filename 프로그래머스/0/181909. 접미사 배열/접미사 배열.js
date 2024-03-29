function solution(my_string) {
    var answer = [];
    let str = "";
    for(let i=0; i<my_string.length; i++) {
        str = "";
        for(let j=i; j<my_string.length; j++) {
            str += my_string.charAt(j);
        }
        answer[i] = str;
    }
    answer.sort();
    return answer;
}