function solution(n) {
    var answer = 0;
    let board = Array.from({length: n}, ()=>Array(n).fill(false));
    
    function isValid(col, row) {
        for(let i=0; i<row; i++) {
            if (board[i][col]) return false;
        }
        
        for(let i=row-1, j=col-1; i>=0 && j>=0; i--, j--) {
            if (board[i][j]) return false;
        }
        
        for(let i=row-1, j=col+1; i>=0 && j<n; i--, j++) {
            if (board[i][j]) return false;
        }
        
        return true;
    }
    
    
    function DFS(row) {
        if (row === n) {
            answer++;
            return;
        }
        
        for(let i=0; i<n; i++) {
            if(isValid(i, row)) {
                board[row][i] = true;
                DFS(row+1);
                board[row][i] = false;
            }
        }
    }
    
    DFS(0);
    return answer;
}