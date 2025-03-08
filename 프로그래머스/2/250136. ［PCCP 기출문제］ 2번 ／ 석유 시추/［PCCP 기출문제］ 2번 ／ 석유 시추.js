function solution(land) {
    var answer = 0;
    let petroleum = new Map();
    let visited = Array.from({length: land.length}, ()=>Array(land[0].length).fill(false));
    
    let move = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0]
    ];
    
    function BFS(start) {
        let queue = [start];
        visited[start[0]][start[1]] = true;
        let count = 0;
        let cols = new Set();
        
        while(queue.length) {
            let [idY, idX] = queue.shift();
            count++;
            cols.add(idX);
            
            for(let i=0; i<4; i++) {
                let newY = idY+move[i][0];
                let newX = idX+move[i][1];
                
                if(newY>=0 && newY<land.length && newX>=0 && newX<land[0].length && !visited[newY][newX] && land[newY][newX]===1) {
                    queue.push([newY, newX]);
                    visited[newY][newX] = true;
                    
                }
            }
        }
        
        for(let col of cols) {
            petroleum.set(col, (petroleum.get(col) || 0) + count);
        }
    }
    
    for(let i=0; i<land.length; i++) {
        for(let j=0; j<land[0].length; j++) {
            if(!visited[i][j] && land[i][j]===1) BFS([i, j]);
        }
    }
    
    for(let count of petroleum) {
        answer = Math.max(answer, count[1]);
    } 
    
    return answer;
}