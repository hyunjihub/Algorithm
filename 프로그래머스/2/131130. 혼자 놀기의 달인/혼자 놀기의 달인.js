function solution(cards) {
    cards.unshift(0);
    let visited = Array.from({length: cards.length+1}, ()=>false);
    visited[0] = true;
    let count = 0;
    
    function play(start) {
        if(!visited[start]) {
            visited[start] = true;
            play(cards[start]);
            count+= 1;
        } else return;
    }

    let caseCount = [0];
    for(let i=1; i<cards.length; i++) {
        count = 0;
        if(!visited[i]) {
            visited[i] = true;
            play(cards[i]);
            count += 1;
            caseCount.push(count);
        }
    }
    
    caseCount.sort((a, b)=>b-a);
    return caseCount[0]*caseCount[1];
}