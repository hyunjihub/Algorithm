function solution(maps) {
    let start = [], end = [], lever = [];
    
    for (let i = 0; i < maps.length; i++) {
        for (let j = 0; j < maps[0].length; j++) {
            if (maps[i][j] === "S") start = [i, j];
            else if (maps[i][j] === "E") end = [i, j];
            else if (maps[i][j] === "L") lever = [i, j];
        }
    }
    
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    
    function BFS(start, end) {
        let queue = [[start[0], start[1], 0]];
        let dp = Array.from({length: maps.length}, () => Array(maps[0].length).fill(Infinity));
        dp[start[0]][start[1]] = 0;
        
        while (queue.length > 0) {
            let [a, b, current] = queue.shift();

            for (let [dx, dy] of directions) {
                let x = a + dx, y = b + dy;

                if (x >= 0 && x < maps.length && y >= 0 && y < maps[0].length) {
                    if ((maps[x][y] === "O" || maps[x][y] === "E" || maps[x][y] === "L" || maps[x][y] === "S") && dp[x][y] > current + 1) {
                        dp[x][y] = current + 1;
                        queue.push([x, y, current + 1]);
                    }
                }
            }
        }
        return dp[end[0]][end[1]];
    }
    
    let toLever = BFS(start, lever);
    if(toLever===Infinity) return -1;
    let toEnd = BFS(lever, end);
    if(toEnd===Infinity) return -1;
    return toLever+toEnd;
}
