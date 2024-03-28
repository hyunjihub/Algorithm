function solution(a, b) {
    var answer = 0;
    let ab = a.toString() + b.toString();
    if(parseInt(ab)>=2*a*b) {
        answer = parseInt(ab);
    } else {
        answer = 2*a*b;
    }
    return answer;
}