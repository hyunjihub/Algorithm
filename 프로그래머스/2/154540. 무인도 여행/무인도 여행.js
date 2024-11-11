function solution(maps) {
    var answer = [];
    for (let i = 0; i < maps.length; i++) {
        maps[i] = maps[i].split("");
    }
    
    let visited = Array.from({ length: maps.length }, () => Array(maps[0].length).fill(false));
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    
    function BFS(start) {
        let queue = [start];
        let sum = 0;
        
        while (queue.length > 0) {
            let [x, y] = queue.shift();
            sum += Number(maps[x][y]);
            
            for (let i = 0; i < directions.length; i++) {
                let [dx, dy] = directions[i];
                let nx = x + dx;
                let ny = y + dy;
                
                if (nx >= 0 && nx < maps.length && ny >= 0 && ny < maps[0].length) {
                    if (!visited[nx][ny] && maps[nx][ny] !== "X") {
                        visited[nx][ny] = true;
                        queue.push([nx, ny]);
                    }
                }
            }
        }
        return sum;
    }
    
    for (let i = 0; i < maps.length; i++) {
        for (let j = 0; j < maps[0].length; j++) {
            if (!visited[i][j] && maps[i][j] !== "X") {
                visited[i][j] = true;
                answer.push(BFS([i, j]));
            }
        }
    }
    
    
    return answer.length===0 ? [-1] : answer.sort((a, b)=>a-b);
}
