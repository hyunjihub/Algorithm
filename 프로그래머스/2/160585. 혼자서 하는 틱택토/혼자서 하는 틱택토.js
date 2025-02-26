function solution(board) {
    let O = 0;
    let X = 0;
    
    function isCorrectOrder() {
        for(let i=0; i<3; i++) {
            for(let j=0; j<3; j++) {
                if(board[i][j]==="O") O++;
                else if(board[i][j]==="X") X++;
            }
        }
        
        if(O===X) return true;
        else if(O>X && O-X===1) return true;
        else return false;
    }
    
    function winCheck(type) {
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === type && board[i][1] === type && board[i][2] === type) return true;
        if (board[0][i] === type && board[1][i] === type && board[2][i] === type) return true;
    }
    if (board[0][0] === type && board[1][1] === type && board[2][2] === type) return true;
    if (board[2][0] === type && board[1][1] === type && board[0][2] === type) return true;
    return false;
}

    
    function isValidGame() {
        let O_win = winCheck("O");
        let X_win = winCheck("X");

        if (O_win && X_win) return false;
        if (O_win && O !== X + 1) return false;
        if (X_win && O !== X) return false;

        return true;
    }

    return isCorrectOrder()&&isValidGame()?1:0;
}
