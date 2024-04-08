function solution(participant, completion) {
    var answer = '';
    let map = new Map();
    for(let i=0; i<participant.length; i++) {
        if(map.has(participant[i])) {
            map.set(participant[i], map.get(participant[i])+1);
        } else {
            map.set(participant[i], 1);
        }
    }
    
    for(let i=0; i<completion.length; i++) {
        map.set(completion[i], map.get(completion[i])-1);
    }
    
    map.forEach((value, key)=>{
        if(value>=1) {
            answer = key;
        }
    });
    return answer;
}