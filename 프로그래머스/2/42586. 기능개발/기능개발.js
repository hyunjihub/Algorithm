function solution(progresses, speeds) {
    var answer = [];
    let end = new Map();
    let prev = -1;
    let time = 0;
    for(let i=0; i<progresses.length; i++) {
        time = Math.ceil((100-progresses[i])/speeds[i]);
        if(prev>time) time=prev;
        if(end.has(time)) {
            end.set(time, end.get(time)+1);
        } else {
            end.set(time, 1);
        }
        prev = time;
    }
    answer = Array.from(end.values());
    return answer;
}