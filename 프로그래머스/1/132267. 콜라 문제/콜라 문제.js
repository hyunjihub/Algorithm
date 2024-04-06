function solution(a, b, n) {
    var answer = 0;
    while(true) {
        if(n<a) break;
        answer += (Math.floor(n/a)*b);
        n = (Math.floor(n/a)*b)+(n%a);
    }
    return answer;
}