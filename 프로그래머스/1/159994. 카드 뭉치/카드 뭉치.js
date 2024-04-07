function solution(cards1, cards2, goal) {
    var answer = 'Yes';
    let str = '';
    for(let i=0; i<goal.length; i++) {
        str = goal[i];
        if(str===cards1[0]) {
            cards1.shift();
        } else if(str===cards2[0]) {
            cards2.shift();
        } else {
            answer = 'No';
            break;
        }
    }
    return answer;
}