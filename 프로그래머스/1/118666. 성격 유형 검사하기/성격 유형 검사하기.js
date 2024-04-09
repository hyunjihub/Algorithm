const type = {
        "R" : [0,0],
        "T" : [0,1],
        "C" : [1,0],
        "F" : [1,1],
        "J" : [2,0],
        "M" : [2,1],
        "A" : [3,0],
        "N" : [3,1]
};

function solution(survey, choices) {
    var answer = '';
    let score = [[0,0],[0,0],[0,0],[0,0]]; // RT / CF / JM / AN
    let index = [];
    for(let i=0; i<survey.length; i++) {
        if(choices[i]<4) {
            index = getIndex(survey[i].charAt(0));
            score[index[0]][index[1]] += (4-choices[i]);
        } else if(choices[i]>4) {
            index = getIndex(survey[i].charAt(1));
            score[index[0]][index[1]] += (choices[i]-4);
        }
    }
    
    answer += score[0][0]>=score[0][1] ? "R" : "T";
    answer += score[1][0]>=score[1][1] ? "C" : "F";
    answer += score[2][0]>=score[2][1] ? "J" : "M";
    answer += score[3][0]>=score[3][1] ? "A" : "N";
    return answer;
}

function getIndex(str) {
    return type[str];
}