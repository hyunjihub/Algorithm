function solution(board) {
    var answer = 0;
    let start = [0, 0];
    
    for(let i=0; i<board.length; i++) {
        for(let j=0; j<board[0].length; j++) {
            if(board[i][j]==="R") {
                start = [i, j];
                break;
            }
        }
    }
    
    let direction = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0]
    ];
    
    let visited = Array.from({length: board.length}, ()=>Array(board[0].length).fill(false));
    
    function move(start, dir) {
        let [x, y] = start;
        let [dx, dy] = dir;

        while (true) {
            const nx = x + dx;
            const ny = y + dy;

            if (
                nx < 0 || ny < 0 || 
                nx >= board.length || ny >= board[0].length || 
                board[nx][ny] === "D"
            ) {
                break;
            }

            x = nx;
            y = ny;
        }

        return [x, y];
    }

    function BFS(start) {
        const queue = [[start, 0]];
        visited[start[0]][start[1]] = true;

        while (queue.length > 0) {
            const [[x, y], depth] = queue.shift();

            if (board[x][y] === "G") return depth;

            for (let dir of direction) {
                const [nx, ny] = move([x, y], dir);

                if (!visited[nx][ny]) {
                    visited[nx][ny] = true;
                    queue.push([[nx, ny], depth + 1]);
                }
            }
        }

        return -1;
    }
    
    return BFS(start);
}