function solution(dartResult) {
    var answer = 0;
    let stage = '';
    let index = 0;
    let score = 0;
    let prev_score = 0;
    for(let i=0; i<3; i++) {
        stage = '';
        score = 0;
        while(true) {
            if(isNaN(parseInt(dartResult.charAt(index)))) break;
            score += dartResult.charAt(index++);
        }
        score = parseInt(score);
        while(true) {
            if(!isNaN(parseInt(dartResult.charAt(index))) || index >= dartResult.length) break;
            stage += dartResult.charAt(index++);
        }
        
        if(stage.charAt(0)==="D") {
            score **= 2;
        } else if(stage.charAt(0)==="T") {
            score **= 3;
        }
        
        if(stage.length===2) {
            if(stage.charAt(1)==="*") {
                score *= 2;
                prev_score *= 2;
            } else {
                score *= -1;
            }
        }
        answer += prev_score;
        prev_score = score;
    }
    answer += prev_score;
    return answer;
}