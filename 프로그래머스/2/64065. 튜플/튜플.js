function solution(s) {
    var answer = [];
    s = s.replaceAll("{", "").replaceAll("}", "").split(",").map(Number);
    let map = new Map();
    for(let i=0; i<s.length; i++) {
        if(map.has(s[i])) {
            map.set(s[i], map.get(s[i])+1);
        } else {
            map.set(s[i], 1);
        }
    }
    let array = Array.from(map.entries());
    array.sort((a, b)=>b[1]-a[1]);
    for(let i=0; i<array.length; i++) {
        answer.push(array[i][0]);
    }
    return answer;
}