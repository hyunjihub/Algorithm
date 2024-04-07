function solution(n, m, section) {
    var answer = 0;
    let paint = Array.from({length: n}, ()=>true);
    for(let i=0; i<section.length; i++) {
        paint[section[i]-1] = false;
    }
    
    for(let i=0; i<n; i++) {
        if(!paint[i]) {
            answer++;
            for(let j=i; j<i+m; j++) {
                if(j===n) break;
                paint[j] = true;
            }
        }
    }
    return answer;
}