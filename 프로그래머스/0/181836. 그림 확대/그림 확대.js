function solution(picture, k) {
    var answer = [];
    let draw = '';
    for(let i=0; i<picture.length; i++) {
        draw = '';
        for(let j=0; j<picture[i].length; j++) {
            for(let l=0; l<k; l++) { 
                draw += picture[i].charAt(j);
            }
        }
        for(let m=0; m<k; m++) { 
            answer.push(draw);
        }
    }
    return answer;
}