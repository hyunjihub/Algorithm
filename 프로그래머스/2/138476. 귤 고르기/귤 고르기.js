function solution(k, tangerine) {
    var answer = 0;
    
    let map = new Map();
    for(let i=0; i<tangerine.length; i++) {
        if(map.has(tangerine[i])) {
            map.set(tangerine[i], map.get(tangerine[i])+1);
        } else {
            map.set(tangerine[i], 1);
        }
    }
    let arr = Array.from(map.values());
    arr.sort((a, b)=>b-a);
    
    let sum = 0;
    for(let i=0; i<arr.length; i++) {
        answer++;
        sum += arr[i];
        if(sum>=k) break;
    }
    return answer;
}