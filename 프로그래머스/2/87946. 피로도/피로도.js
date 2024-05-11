function solution(k, dungeons) {
    var answer = -1;
    let completed = Array.from({length: dungeons.length}, ()=>false);
    let max = 0;
    function DFS(clear, fatigue) {
        let can = false;
        for(let i=0; i<dungeons.length; i++) {
            if(!completed[i] && dungeons[i][0]<=fatigue) {
                completed[i] = true;
                DFS(clear+1, fatigue-dungeons[i][1]);
                can = true;
                completed[i] = false;
            }
        }
        if(!can) {
            if(max<clear) max=clear;
        }
    }
    
    DFS(0, k);
    return max;
}