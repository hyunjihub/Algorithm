function solution(my_string) {
    var answer = 0;
    let n = '';
    for(let i=0; i<my_string.length; i++) {
        if(!isNaN(parseInt(my_string.charAt(i)))) {
            n = my_string.charAt(i);
            while(true) {
                if(i===my_string.length-1) break;
                if(!isNaN(parseInt(my_string.charAt(i+1)))) {
                    n += my_string.charAt(i+1);
                    i++;
                } else {
                    break;
                }
            }
            answer += parseInt(n);
        }
    }
    return answer;
}