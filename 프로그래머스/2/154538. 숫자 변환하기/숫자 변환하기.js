function solution(x, y, n) {
    var answer = 0;
    if(x===y) return 0;
    else if(x+n>y && x*2>y && x*3>y) return -1;
    else {
        let queue = [[x, 0]];
        let visited = new Set();
        let index = 0;
        
        while(index < queue.length) {
            let [current, count] = queue[index++];
            if(current===y) return count;
            
            if(!visited.has(current)) {
                visited.add(current);
                if(current+n<=y) queue.push([current+n, count+1]);
                if(current*2<=y) queue.push([current*2, count+1]);
                if(current*3<=y) queue.push([current*3, count+1]);
            }
        }
    }
    return -1;
}

