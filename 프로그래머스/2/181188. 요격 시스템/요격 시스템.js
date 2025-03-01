function solution(targets) {
    var answer = 1;
    
    targets.sort((a, b) => a[1] - b[1]);
    
    let currentEnd = targets[0][1];
    
    for (let i = 1; i < targets.length; i++) {
        let [s, e] = targets[i];

        if (s >= currentEnd) { 
            answer++;
            currentEnd = e;
        }
    }
    
    return answer;
}
