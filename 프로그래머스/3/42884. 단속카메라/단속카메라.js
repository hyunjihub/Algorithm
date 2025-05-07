function solution(routes) {
    let answer = 0;
    routes.sort((a, b) => a[1] - b[1]);
    
    let camera = -Infinity;
    for(let i=0; i<routes.length; i++) {
        let [start, end] = routes[i];
        
        if(start>camera) {
            camera = end;
            answer++;
        }
    }
    
    return answer;
}