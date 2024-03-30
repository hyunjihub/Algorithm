function solution(before, after) {
    var answer = 1;
    before = before.split("").sort();
    after = after.split("").sort();
    for(let i=0; i<before.length; i++) {
        if(before[i]!==after[i]) {
            answer = 0;
            break;
        }
    }
    return answer;
}