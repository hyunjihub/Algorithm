function solution(N, road, K) {
    let graph = Array.from({ length: N + 1 }, () => []);
    for (let i = 0; i < road.length; i++) {
        graph[road[i][0]].push([road[i][1], road[i][2]]);
        graph[road[i][1]].push([road[i][0], road[i][2]]);
    }

    let distance = Array.from({ length: N + 1 }, () => Infinity);
    let queue = [[0, 1]];
    distance[1] = 0;

    while (queue.length > 0) {
        queue.sort((a, b) => a[0] - b[0]);
        let [dist, to] = queue.shift();

        for (let i = 0; i < graph[to].length; i++) {
            let [nextNode, cost] = graph[to][i];
            let newDist = dist + cost;
            
            if (distance[nextNode] > newDist) {
                distance[nextNode] = newDist;
                queue.push([newDist, nextNode]);
            }
        }
    }

    let answer = distance.filter(d => d <= K).length;

    return answer;
}
