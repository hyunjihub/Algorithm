function solution(dirs) {
    var answer = 0;
    let visited = new Set();
    let current = [0, 0];
    
    for(let i=0; i<dirs.length; i++) {
        if(dirs[i]==="U") {
            if(current[1]+1<=5) {
                if(!visited.has(`${current[0]}-${current[1]}:${current[0]}-${current[1]+1}`)) {
                    visited.add(`${current[0]}-${current[1]}:${current[0]}-${current[1]+1}`);
                    visited.add(`${current[0]}-${current[1]+1}:${current[0]}-${current[1]}`);
                    answer++;
                }
                current[1]++;
            }
        } else if(dirs[i]==="D") {
            if(current[1]-1>=-5) {
                if(!visited.has(`${current[0]}-${current[1]}:${current[0]}-${current[1]-1}`)) {
                    visited.add(`${current[0]}-${current[1]}:${current[0]}-${current[1]-1}`);
                    visited.add(`${current[0]}-${current[1]-1}:${current[0]}-${current[1]}`);
                    answer++;
                }
                current[1]--;
            }
        } else if(dirs[i]==="R") {
            if(current[0]+1<=5) {
                if(!visited.has(`${current[0]+1}-${current[1]}:${current[0]}-${current[1]}`)) {
                    visited.add(`${current[0]+1}-${current[1]}:${current[0]}-${current[1]}`);
                    visited.add(`${current[0]}-${current[1]}:${current[0]+1}-${current[1]}`);
                    answer++;
                }
                current[0]++;
            }
        } else {
            if(current[0]-1>=-5) {
                if(!visited.has(`${current[0]}-${current[1]}:${current[0]-1}-${current[1]}`)) {
                    visited.add(`${current[0]}-${current[1]}:${current[0]-1}-${current[1]}`);
                    visited.add(`${current[0]-1}-${current[1]}:${current[0]}-${current[1]}`);
                    answer++;
                }
                current[0]--;
            }
        }
    }
    return answer;
}