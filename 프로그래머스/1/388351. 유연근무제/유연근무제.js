function solution(schedules, timelogs, startday) {
    var answer = 0;
    
    function getTime(t) {
        t = (t+"").padStart(4, "0");
        let hour = t.slice(0, 2);
        let minute = t.slice(2);

        return 60*Number(hour)+Number(minute);
    }
    
    for(let i=0; i<schedules.length; i++) {
        let limited = getTime(schedules[i])+10;
        let isGifted = true;
        for(let j=0; j<7; j++) {
            if((startday+j)%7!==0 && (startday+j)%7!==6) {
                if(getTime(timelogs[i][j])>limited) {
                    isGifted = false;
                }
            }
        }
        if(isGifted) answer++;
    }
    return answer;
}