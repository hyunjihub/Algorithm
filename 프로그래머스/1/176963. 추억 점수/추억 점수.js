function solution(name, yearning, photo) {
    var answer = [];
    let sum = 0;
    for(let i=0; i<photo.length; i++) {
        sum = 0;
        for(let j=0; j<photo[i].length; j++) {
            for(let k=0; k<name.length; k++) {
                if(photo[i][j]===name[k]) {
                    sum+=yearning[k];
                    break;
                }
            }
        }
        answer.push(sum);
    }
    return answer;
}