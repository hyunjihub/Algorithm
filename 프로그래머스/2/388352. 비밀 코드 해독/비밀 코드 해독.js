function solution(n, q, ans) {
    var answer = 0;
    
    let set = new Set();
    function DFS(prev, num) {
        if(num.length===5) {
            set.add(num.join("-"));
            return;
        }
        
        for(let i=prev+1; i<=n; i++) {
            DFS(i, [...num, i]);
        }
    }
    
    DFS(0, []);
    
    function getIsCorrect(num, q, ans) {
        let sum = 0;
        for(let i=0; i<5; i++) {
            if(num.has(q[i])) sum++;
        }
        return sum===ans;
    }
    
    for(let num of set) {
        let isPossible = true;
        num = new Set(num.split("-").map(Number));
        for(let i=0; i<q.length; i++) {
            if(!getIsCorrect(num, q[i], ans[i])) {
                isPossible = false;
                break;
            }
        }
        if(isPossible) answer++;
    }
    
    return answer;
}