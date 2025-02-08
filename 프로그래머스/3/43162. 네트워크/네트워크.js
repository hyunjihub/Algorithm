function solution(n, computers) {
    var answer = 0;
    let visited = Array.from({length: n}, ()=>false);
    
    function BFS(start) {
        let queue = [start];
        visited[start] = true;
        
        while(queue.length) {
            let computer = queue.shift();
            
            for(let i=0; i<n; i++) {
                if(!visited[i] && computers[computer][i]===1) {
                    visited[i] = true;
                    queue.push(i);
                }
            }
        }
    }
    
    for(let i=0; i<n; i++) {
        if(!visited[i]) {
            BFS(i);
            answer++;
        }
    }
    return answer;
}