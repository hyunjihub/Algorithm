function solution(n) {
    var answer = 0;
    let count = 0;
    for(let i=1;; i++) {
        if(i%3===0 || i.toString().indexOf('3')!==-1) {
            continue;
        }
        count++;
        if(count===n) {
            answer = i;
            break;
        }
    }
    return answer;
}