function solution(board, moves) {
    var answer = 0;
    let basket = [];
    let doll = 0;
    for(let i=0; i<moves.length; i++) {
        doll = 0;
        for(let j=0; j<board.length; j++) {
            doll = board[j][moves[i]-1];
            if(doll!==0) {
                basket.push(doll);
                board[j][moves[i]-1] = 0;
                break;
            }
        }
    }
    
    for(let i=0; i<basket.length-1; i++) {
        if(basket[i]===basket[i+1]) {
            basket.splice(i, 2);
            answer += 2;
            i=-1;
        }
    }
    return answer;
}