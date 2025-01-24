function solution(k, d) {
    var answer = 0;
    for(let i=0; i<=d; i+=k) {
        let max = Math.sqrt(d**2-i**2);
        answer += Math.floor(max/k)+1;
    }
    return answer;
}