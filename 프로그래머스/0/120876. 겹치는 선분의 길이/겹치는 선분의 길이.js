function solution(lines) {
    var answer = 0;
    let line = Array.from({length: 200}, ()=>0);
    for(let i=0; i<lines.length; i++) {
        for(let j=lines[i][0]; j<lines[i][1]; j++) {
            line[100+j]++;
        }
    }
    for(let i=0; i<line.length; i++) {
        if(line[i]>=2) {
            answer++;
        }
    }
    return answer;
}