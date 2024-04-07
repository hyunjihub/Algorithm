function solution(k, m, score) {
    var answer = 0;
    score.sort((a,b)=>b-a);
    let count = Math.floor(score.length/m);
    let box = [];
    for(let i=0; i<count; i++) {
        box = score.slice((m*i), m*i+m);
        answer += box[m-1]*m;
    }
    return answer;
}