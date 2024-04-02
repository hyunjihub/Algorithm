function solution(score) {
    var answer = [];
    let avg = [];
    let sum = 0;
    for(let i=0; i<score.length; i++) {
        sum = score[i][0]+score[i][1];
        avg.push(sum/2);
    }
    let set = new Set(avg);
    set = [...set];
    set.sort((a,b)=>a-b);
    
    let current = set.pop();
    let rank = 1;
    let same = 0;
    while(true) {
        same = 0;
        for(let i=0; i<avg.length; i++) {
            if(avg[i]===current) {
                answer[i] = rank;
                same++;
            }
        }
        if(set.length===0) break;
        current = set.pop();
        rank += same;
    }
    return answer;
}