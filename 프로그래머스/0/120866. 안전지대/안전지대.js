function solution(board) {
    var answer = 0;
    let check = Array.from(Array(board.length), () => new Array(board.length));
    for(let i=0; i<board.length; i++) {
        for(let j=0; j<board.length; j++) {
            if(board[i][j]===1) {
                check[i][j] = 1;
                if(i!==0) {
                    check[i-1][j] = 1;
                    if(j!==0) {
                        check[i-1][j-1] = 1;
                        check[i][j-1] = 1;
                    }
                    if(j!==board.length-1) {
                        check[i-1][j+1] = 1;
                        check[i][j+1] = 1;
                    }
                }
                if(i!==board.length-1) {
                    check[i+1][j] = 1;
                    if(j!==0) {
                        check[i+1][j-1] = 1;
                    }
                    if(j!==board.length-1) {
                        check[i+1][j+1] = 1;
                    }
                }
            }
        }
    }
    
    for(let i=0; i<check.length; i++) {
        for(let j=0; j<check.length; j++) {
            if(check[i][j]!==1) {
                answer++;
            }
        }
    }
    return answer;
}