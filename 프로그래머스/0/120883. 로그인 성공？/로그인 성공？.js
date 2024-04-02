function solution(id_pw, db) {
    var answer = '';
    let hasId = false;
    for(let i=0; i<db.length; i++) {
        if(id_pw[0]===db[i][0] && id_pw[1]===db[i][1]) {
            answer = "login";
            break;
        } else if(id_pw[0]===db[i][0]) {
            hasId = true;
        }
    }
    if(hasId && answer==='') {
        answer = "wrong pw";
    } else if(!hasId && answer==='') {
        answer = "fail";
    }
    return answer;
}