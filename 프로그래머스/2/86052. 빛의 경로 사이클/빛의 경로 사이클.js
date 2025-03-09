function solution(grid) {
    let answer = [];
    const rows = grid.length;
    const cols = grid[0].length;
    const visited = Array.from({ length: rows }, () => 
        Array.from({ length: cols }, () => Array(4).fill(false))
    );

    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];

    const changeDir = {
        'S': [0, 1, 2, 3],
        'L': [3, 0, 1, 2], 
        'R': [1, 2, 3, 0] 
    };

    function findCycle(x, y, d) {
        let count = 0;
        while (!visited[x][y][d]) {
            visited[x][y][d] = true;
            count++;

            let nx = (x + dx[d] + rows) % rows;
            let ny = (y + dy[d] + cols) % cols;
            let direction = grid[nx][ny];

            d = changeDir[direction][d];
            
            x = nx;
            y = ny;
        }
        return count;
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            for (let d = 0; d < 4; d++) {
                if (!visited[i][j][d]) {
                    answer.push(findCycle(i, j, d));
                }
            }
        }
    }

    return answer.sort((a, b) => a - b);
}
