function solution(my_string) {
    var answer = [];
    let index = 0;
    for(let i=0; i<my_string.length; i++) {
        if(!isNaN(parseInt(my_string.charAt(i)))) {
            answer[index++] = parseInt(my_string.charAt(i));
        }
    }
    answer.sort((a,b)=>a-b);
    return answer;
}