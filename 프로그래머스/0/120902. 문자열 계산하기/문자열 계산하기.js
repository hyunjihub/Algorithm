function solution(my_string) {
    var answer = 0;
    my_string = my_string.split(" ");
    answer = parseInt(my_string[0]);
    for(let i=1; i<my_string.length; i+=2) {
        if(my_string[i]==='+') {
            answer += parseInt(my_string[i+1]);
        } else if(my_string[i]==='-') {
            answer -= parseInt(my_string[i+1]);
        }
    }
    return answer;
}