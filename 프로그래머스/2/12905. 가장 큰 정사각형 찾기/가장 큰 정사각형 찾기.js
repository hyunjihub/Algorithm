function solution(board) {
    const rows = board.length;
    const cols = board[0].length;

    let maxLength = 0;
    for (let i = 0; i < rows; i++) {
        if (board[i][0] === 1) maxLength = 1;
    }
    for (let j = 0; j < cols; j++) {
        if (board[0][j] === 1) maxLength = 1;
    }
    
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (board[i][j] === 1) {
                board[i][j] = Math.min(
                    board[i - 1][j],    
                    board[i][j - 1],   
                    board[i - 1][j - 1]
                ) + 1;

                maxLength = Math.max(maxLength, board[i][j]);
            }
        }
    }

    return maxLength ** 2;
}
