function solution(common) {
    var answer = 0;
    let diff1 = common[1]-common[0];
    let diff2 = common[2]-common[1];
    if(diff1===diff2) {
        answer = common[common.length-1]+diff1;
    } else {
        let mul = diff2/diff1;
        answer = common[common.length-1]*mul;
    }
    return answer;
}