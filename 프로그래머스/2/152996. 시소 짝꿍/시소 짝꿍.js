function solution(weights) {
    let answer = 0;
    let map = new Map();
    const ratio = [1, 3 / 2, 2, 4 / 3];
    weights.sort((a, b)=>b-a);
    
    for(let i=0; i<weights.length; i++) {
        for(let j=0; j<ratio.length; j++) {
            if(map.has(ratio[j]*weights[i])) answer += map.get(ratio[j]*weights[i]);
        }
        map.set(weights[i], (map.get(weights[i]) || 0) + 1);
    }
    
    return answer;
}
