/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let set = new Set();
    const move = [
        [0, 1], [1, 0], [0, -1], [-1, 0]
    ];

    function DFS(x, y, visited, idx) {
        if(idx===word.length) return true;

        for(let i=0; i<move.length; i++) {
            let newY = y+move[i][0];
            let newX = x+move[i][1];

            if(newY>=0 && newY<board.length && newX>=0 && newX<board[0].length && !visited[newY][newX] && word[idx]===board[newY][newX]) {
                visited[newY][newX] = true;
                if (DFS(newX, newY, visited, idx + 1)) return true;
                visited[newY][newX] = false;
            }
        }

        return false;
    }

    for(let i=0; i<board.length; i++) {
        for(let j=0; j<board[0].length; j++) {
            if(word[0]===board[i][j]) {
                let visited = Array.from({ length: board.length }, () => Array(board[0].length).fill(false));
                visited[i][j] = true;
                if (DFS(j, i, visited, 1)) return true;
            }
        }
    }

    return false;
};