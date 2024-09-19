function solution(n) {
    var answer = [];
    let snail = Array.from({length: n}, (_, index)=>Array(index+1).fill(0));
    let sum = 0;
    for(let i=1; i<=n; i++) {
        sum+=i;
    }
    
    let direction = "down";
    let num = 1;
    let current = [0, 0];
    while(true) {
        if(num>sum) break;
        snail[current[0]][current[1]] = num;
        if(direction==="down") {
            if(current[0]+1>=n) {
                direction = "right";
                current[1]++;
            } else if(snail[current[0]+1][current[1]]!==0) {
                direction = "right";
                current[1]++;
            } else {
                current[0]++;
            }
        } else if(direction==="up") {
            if(current[0]-1<0) {
                direction = "down";
                current[0]++;
            } else if(snail[current[0]-1][current[1]-1]!==0) {
                direction = "down";
                current[0]++;
            } else {
                current[0]--;
                current[1]--;
            }
        } else {
            if(current[1]+1>=n) {
                direction = "up";
                current[0]--;
                current[1]--;
            } else if(snail[current[0]][current[1]+1]!==0) {
                direction = "up";
                current[0]--;
                current[1]--;
            } else current[1]++;
        }
        num++;
    }
    
    answer = snail.flat();
    return answer;
}