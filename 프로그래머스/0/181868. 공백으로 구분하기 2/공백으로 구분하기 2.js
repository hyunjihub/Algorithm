function solution(my_string) {
    var answer = [];
    let array = my_string.split(" ");
    let index = 0;
    for(let i=0; i<array.length; i++) {
        if(array[i]!=="") {
            answer[index++] = array[i];
        }
    }
    return answer;
}