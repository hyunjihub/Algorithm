function solution(t, p) {
    var answer = 0;
    let cal = 0;
    for(let i=0; i<t.length-(p.length-1); i++) {
        cal = parseInt(t.substr(i,p.length));
        if(cal<=parseInt(p)) answer++;
    }
    return answer;
}