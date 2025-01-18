function solution(picks, minerals) {
    var answer = Infinity;
    let totalPicks = picks.reduce((sum, p) => sum + p, 0);
    let maxPossibleTasks = Math.min(totalPicks, Math.ceil(minerals.length / 5));
    
    function getFatigue(mineral, pick) {
        if(pick==="diamond") {
            return 1;
        } else if(pick==="iron") {
            if(mineral==="diamond") return 5;
            else return 1;
        } else {
            if(mineral==="diamond") return 25;
            else if(mineral==="iron") return 5;
            else return 1;
        }
    }
    
    function DFS(fatigue, count, used, current) {
        if(fatigue >= answer) return;
        if (count === maxPossibleTasks) {
            answer = Math.min(fatigue, answer);
            return;
        }

        let start = count * 5;
        let end = Math.min(start + 5, minerals.length);

        let currentFatigue = 0;
        for (let i = start; i < end; i++) {
            currentFatigue += getFatigue(minerals[i], current);
        }
        
        if(used.every(pick=>pick===0)) {
            answer = Math.min(fatigue + currentFatigue, answer);
        } else {
            for(let i=0; i<used.length; i++) {
                if(used[i]>0) {
                    used[i]--;
                    DFS(fatigue + currentFatigue, count+1, [...used], i===0 ? "diamond" : i===1 ? "iron" : "stone");
                    used[i]++;
                }
            }
        }
        
    }
    
    for(let i=0; i<picks.length; i++) {
        if(picks[i]>0) {
            picks[i]--;
            DFS(0, 0, [...picks], i===0 ? "diamond" : i===1 ? "iron" : "stone");
            picks[i]++;
        }
    }
    
    return answer;
}