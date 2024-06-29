function solution(m, n, board) {
    var answer = 0;
    let count = 0;
    for(let i=0; i<m; i++) {
        board[i] = board[i].split("");
    }
    
    while(true) {
        let remove = new Set();
        for(let i=0; i<m-1; i++) {
            for(let j=0; j<n-1; j++) {
                if(board[i][j]!==null && board[i][j]===board[i][j+1] && board[i][j]===board[i+1][j] && board[i+1][j]===board[i+1][j+1]) {
                    remove.add(`${i} ${j}`);
                }
            }
        }
        
        if(remove.size===0) break;
        else {
            for(let loc of remove) {
                let [h, w] = loc.split(" ").map(Number);
                board[h][w] = null;
                board[h][w+1] = null;
                board[h+1][w] = null;
                board[h+1][w+1] = null;
            }
            
           
            for (let j = 0; j < n; j++) {
                let emptyIndex = m - 1;
                for (let i = m - 1; i >= 0; i--) {
                    if (board[i][j] !== null) {
                        [board[emptyIndex][j], board[i][j]] = [board[i][j], board[emptyIndex][j]];
                        emptyIndex--;
                    }
                }
                for (let i = emptyIndex; i >= 0; i--) {
                    board[i][j] = null;
                }
            }
        }  
    }

    for(let i=0; i<m; i++) {
        for(let j=0; j<n; j++) {
            if(board[i][j]===null) answer++;
        }
    }
    
    return answer;
}