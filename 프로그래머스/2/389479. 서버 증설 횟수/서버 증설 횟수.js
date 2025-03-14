function solution(players, m, k) {
    var answer = 0;
    
    let server = [];
    for(let i=0; i<24; i++) {
        while (server.length > 0 && server[0] === i) {
            server.shift();
        }
        
        let num = Math.floor(players[i]/m);
        while(server.length<num) {
            server.push(i+k);
            answer++;
        }
    }
    return answer;
}