function solution(n, lost, reserve) {
    var answer = 0;
    let spare = Array.from({length:n}, ()=>false);
    for(let i=0; i<reserve.length; i++) {
        spare[reserve[i]-1] = true;
    }
    
    let lost_n = 0;
    for(let i=0; i<lost.length; i++) {
        if(spare[lost[i]-1]) {
            spare[lost[i]-1] = false;
            lost.splice(i, 1);
            i--;
        }
    }
    
    lost.sort((a,b)=>a-b);
    
    let borrow = 0;
    for(let i=0; i<lost.length; i++) {
        if(spare[lost[i]-2]) {
            spare[lost[i]-2] = false;
            borrow++;
            continue;
        }
        if(spare[lost[i]]) {
            spare[lost[i]] = false;
            borrow++;
            continue;
        }
    }
    answer = n-lost.length+borrow;
    return answer;
}