function solution(quiz) {
    var answer = [];
    let result = 0;
    for(let i=0; i<quiz.length; i++) {
        quiz[i] = quiz[i].split(" ");
        if(quiz[i][1]==='-') {
            result = parseInt(quiz[i][0])-parseInt(quiz[i][2]);
            if(result===parseInt(quiz[i][4])) {
                answer.push('O');
            } else {
                answer.push('X');
            }
        } else {
            result = parseInt(quiz[i][0])+parseInt(quiz[i][2]);
            if(result===parseInt(quiz[i][4])) {
                answer.push('O');
            } else {
                answer.push('X');
            }
        }
    }
    return answer;
}