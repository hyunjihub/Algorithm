function solution(record) {
    var answer = [];
    let user = new Map();
    for(let i=0; i<record.length; i++) {
        record[i] = record[i].split(" ");
        if(record[i][0]!=="Leave") user.set(record[i][1], record[i][2]);
    }
    
    for(let i=0; i<record.length; i++) {
        if(record[i][0]==="Enter") {
            answer.push(`${user.get(record[i][1])}님이 들어왔습니다.`);
        } else if(record[i][0]==="Leave") {
            answer.push(`${user.get(record[i][1])}님이 나갔습니다.`);
        }
    }
    return answer;
}