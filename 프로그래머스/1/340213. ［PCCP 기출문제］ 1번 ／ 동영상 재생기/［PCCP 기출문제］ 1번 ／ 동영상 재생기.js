function solution(video_len, pos, op_start, op_end, commands) {
    var answer = '';
    
    let full = video_len.split(":").map(Number);
    let current = pos.split(":").map(Number);
    let start = op_start.split(":").map(Number);
    let end = op_end.split(":").map(Number);
    
    let startSec = start[0]*60+start[1];
    let endSec = end[0]*60+end[1];
    
    function isOpening() {
        let sec = current[0]*60+current[1];
        if(startSec<=sec && sec<=endSec) return true;
        return false;
    }

    for(let i=0; i<commands.length; i++) {
        if(isOpening()) {
                current[0] = end[0];
                current[1] = end[1];
        }
        
        if(commands[i]==="next") { 
            current[1] = current[1] + 10;
            if(current[1]>59) {
                current[0]++;
                current[1] = current[1] - 60;
            }
            if(current[0]>full[0] || (current[0]=== full[0] && current[1]>full[1])) {
                current[0] = full[0];
                current[1] = full[1];
            }
        } else if(commands[i]==="prev") {
            current[1] = current[1] - 10;
            if(current[1]<0) {
                current[0]--;
                current[1] = 60 + current[1];
            }
            if(current[0]<0) {
                current[0] = 0;
                current[1] = 0;
            }
        }
        if(isOpening()) {
                current[0] = end[0];
                current[1] = end[1];
        }
    }
    
    answer = `${(current[0]+"").padStart(2, '0')}:${(current[1]+"").padStart(2, '0')}`;
    return answer;
}