function solution(d, budget) {
    var answer = 0;
    d.sort((a,b)=>a-b);
    let possible = false;
    let sum = 0;
    while(true) {
        sum = 0;
        for(let i=0; i<d.length; i++) {
            sum += d[i];
        }
        if(sum<=budget) break;
        d.pop();
    }
    answer = d.length;
    return answer;
}