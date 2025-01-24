function solution(diffs, times, limit) {
    let maxDiffs = diffs.reduce((acc, cur) => Math.max(acc, cur), 1);

    function getAllTime(diff) {
        let time = 0;
        for (let i = 0; i < diffs.length; i++) {
            if (diff >= diffs[i]) {
                time += times[i];
            } else {
                let duration = times[i];
                if (i > 0) {
                    duration += times[i - 1];
                }
                let wrong = diffs[i] - diff;
                
                time += duration * wrong + times[i];
            }
        }
        return time;
    }

    let start = 0;
    let end = maxDiffs;
    let result = 0;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        const currentTime = getAllTime(mid);

        if (currentTime <= limit) {
            result = mid;
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return result===0?1:result;
}
