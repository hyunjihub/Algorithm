function solution(num, k) {
    var answer = 0;
    num = num.toString();
    if(num.indexOf(k.toString())===-1) {
        answer = -1;
    } else {
        answer = num.indexOf(k.toString())+1;
    }
    return answer;
}