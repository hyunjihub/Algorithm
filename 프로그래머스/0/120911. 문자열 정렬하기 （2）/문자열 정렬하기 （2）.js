function solution(my_string) {
    var answer = "";
    my_string = my_string.toLowerCase();
    let array = [...my_string];
    array.sort();
    for(let i=0; i<array.length; i++) {
        answer += array[i];
    }
    return answer;
}