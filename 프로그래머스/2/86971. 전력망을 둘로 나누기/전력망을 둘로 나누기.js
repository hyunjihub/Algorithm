function solution(n, wires) {
    var answer = Infinity;
    
    function BFS(start, removeIndex) {
        let queue = [start];
        let visited = Array(n).fill(false);
        visited[start] = true;
        let count = 1;
        
        while(queue.length>0) {
            let current = queue.shift();
            
            for(let j = 0; j < wires.length; j++) {
                if(j === removeIndex) continue;

                const [a, b] = wires[j];
                if (a === current && !visited[b]) { 
                    visited[b] = true;
                    queue.push(b);
                    count++;
                } else if (b === current && !visited[a]) { 
                    visited[a] = true;
                    queue.push(a);
                    count++;
                }
            }
            count++;
        }
        return count;
    }
    
    for(let i=0; i<wires.length; i++) {
        let remove = wires[i];
        let nodeCount = BFS(remove[0], i);
        let diff = Math.abs(n-nodeCount);
        answer = Math.min(diff, answer);
    }
    return answer;
}