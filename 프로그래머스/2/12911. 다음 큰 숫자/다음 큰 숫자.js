function solution(n) {
    var answer = 0;
    
    let n_num = n.toString(2).replaceAll("0", "");
    let one = '';
    for(let i=n+1;;i++) {
        one = i.toString(2).replaceAll("0", "");
        if(one.length===n_num.length) {
            answer = i;
            break;
        }
    }
    return answer;
}