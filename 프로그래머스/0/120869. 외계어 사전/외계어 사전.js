function solution(spell, dic) {
    var answer = 2;
    let use = true;
    for(let i=0; i<dic.length; i++) {
        use = true;
        for(let j=0; j<spell.length; j++) {
            if(dic[i].indexOf(spell[j])===-1) {
                use = false;
                break;
            }
        }
        if(use) {
            answer = 1;
        }
    }
    return answer;
}