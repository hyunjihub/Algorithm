function solution(k, score) {
    var answer = [];
    let temple = [];
    if(k>score.length) {
        k=score.length;
    }
    for(let i=0; i<k; i++) {
        temple.push(score[i]);
        temple.sort((a,b)=>a-b);
        answer.push(temple[0]);
    }
    for(let i=k; i<score.length; i++) {
        if(temple[0]<score[i]) {
            temple.shift();
            temple.push(score[i]);
        }
        temple.sort((a,b)=>a-b);
        answer.push(temple[0]);
    }
    return answer;
}