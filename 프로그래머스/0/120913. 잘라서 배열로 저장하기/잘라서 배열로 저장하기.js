function solution(my_str, n) {
    var answer = [];
    let str = '';
    for(let i=0; i<my_str.length; i++) {
        str += my_str.charAt(i);
        if(i%n===n-1 || i===my_str.length-1) {
            answer.push(str);
            str = '';
        }
    }
    return answer;
}