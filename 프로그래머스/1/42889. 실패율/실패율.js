function solution(N, stages) {
    var answer = [];
    let clear = 0;
    let not_clear = 0;
    let fail = Array.from({length: N+1}, ()=>0);
    stages.sort((a,b)=>a-b);
    let fail_sort = new Set();
    
    for(let i=1; i<=N; i++) {
        clear = 0;
        not_clear = 0;
        for(let j=0; j<stages.length; j++) {
            if(stages[j]===i) not_clear++;
            if(i<=stages[j]) clear++;
        }
        if(clear===0) fail[i] = 0;
        else fail[i] = not_clear/clear;
        fail_sort.add(fail[i]);
    }
    fail = fail.splice(1);
    fail_sort = Array.from(fail_sort).sort((a,b)=>b-a);
    
    for(let i=0; i<fail_sort.length; i++) {
        for(let j=0; j<fail.length; j++) {
            if(fail[j]===fail_sort[i]) {
                answer.push(j+1);
            }
        }
    }
    return answer;
}