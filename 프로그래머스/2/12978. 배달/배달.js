function solution(N, road, K) {
    let graph = Array.from({length: N+1}, ()=>[]);
    for(let i=0; i<road.length; i++) {
        let [a, b, c] = road[i];
        graph[a].push([b, c]);
        graph[b].push([a, c]);
    }
    
    let distance = Array.from({length: N+1}, ()=>Infinity);
    distance[1] = 0;
    let queue = [[0, 1]];
    
    while(queue.length) {
        queue.sort((a, b)=>a[0]-b[0]);
        let [dist, current] = queue.shift();

        for(let i=0; i<graph[current].length; i++) {
            let [next, cost] = graph[current][i];
            if(dist+cost<distance[next]) {
                distance[next] = dist+cost;
                queue.push([dist+cost, next]);
            }
        }
    }
    
    return distance.filter((i)=>i<=K).length;
}
