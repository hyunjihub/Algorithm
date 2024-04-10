function solution(players, callings) {
    var answer = [];
    let map = new Map();
    
    players.forEach((name, index) => {
        map.set(name, index);
    })

    let front = '';
    let grade = 0;
    for(let i=0; i<callings.length; i++) {
        grade = map.get(callings[i]);
        front = players[grade-1];
        
        [players[grade-1], players[grade]] = [players[grade], players[grade-1]];
        map.set(callings[i], map.get(callings[i])-1);
        map.set(front, map.get(front)+1);
    }
    answer = players;
    return answer;
}