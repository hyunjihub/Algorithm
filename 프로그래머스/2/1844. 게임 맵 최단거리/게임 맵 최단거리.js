function solution(maps) {
    let width = maps[0].length;
    let height = maps.length;
    let visited = Array.from({length: height}, ()=>Array(width).fill(false));
    
    let queue = [];
    queue.push([0, 0, 1]);
    visited[0][0] = true;
    while(true) {
        if(queue.length===0) break;
        let [x, y, dist] = queue.shift();
        if(x===width-1 && y===height-1) {
            return dist;
        }
        
        if(x-1>=0 && maps[y][x-1]===1 && !visited[y][x-1]) {
            queue.push([x-1, y, dist+1]);
            visited[y][x-1] = true;
        }
        if(x+1<width && maps[y][x+1]===1 && !visited[y][x+1]) {
            queue.push([x+1, y, dist+1]);
            visited[y][x+1] = true;
        }
        if(y-1>=0 && maps[y-1][x]===1 && !visited[y-1][x]) {
            queue.push([x, y-1, dist+1]);
            visited[y-1][x] = true;
        }
        if(y+1<height && maps[y+1][x]===1 && !visited[y+1][x]) {
            queue.push([x, y+1, dist+1]);
            visited[y+1][x] = true;
        }
    }
    return -1;
}