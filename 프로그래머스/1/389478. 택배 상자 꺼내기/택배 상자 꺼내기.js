function solution(n, w, num) {
    var answer = 0;
    let box = [];
    
    let idx = 1;
    let numIndex = [0, 0];
    for(let i=1; i<=Math.ceil(n/w); i++) {
        let line = [];
        for(let j=0; j<w; j++) {
            if(idx>n) break;
            if(idx===num) numIndex = [i, i%2===0?w-j-1:j];
            line.push(idx++);
        }
        
        while (line.length < w) {
            line.push(null);
        }
        
        if(i%2===0) box.push([...line.reverse()]);
        else box.push([...line]);
    }

    answer = box.length-numIndex[0]+1;
    if(!box[box.length-1][numIndex[1]]) answer--;
    return answer;
}