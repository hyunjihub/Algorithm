function solution(s) {
    var answer = Infinity;
    if(s.length===1) return 1;
    
    for(let i=1; i<=s.length/2; i++) {
        let prev = "";
        let count = 1;
        let compression = "";
        for(let j=0; j<s.length; j+=i) {
            let current = s.slice(j, j+i);
            if(prev===current) {
                count++;
            } else {
                compression += (count!== 1 ? count : "") + prev;
                prev = current;
                count = 1;
            }
        }
        compression += (count!== 1 ? count : "") + prev;
        answer = Math.min(answer, compression.length);
    }
    return answer;
}