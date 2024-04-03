function solution(keyinput, board) {
    var answer = [0, 0];
    let maxup = (board[1]-1)/2;
    let maxright = (board[0]-1)/2;
    for(let i=0; i<keyinput.length; i++) {
        if(keyinput[i]==="left") {
            if(answer[0]!==(maxright*(-1))) {
                answer[0]--;
            }
        } else if(keyinput[i]==="right") {
            if(answer[0]!==maxright) {
                answer[0]++;
            }
        } else if(keyinput[i]==="up") {
            if(answer[1]!==maxup) {
                answer[1]++;
            }
        } else {
            if(answer[1]!==(maxup*(-1))) {
                answer[1]--;
            }
        }
    }
    return answer;
}