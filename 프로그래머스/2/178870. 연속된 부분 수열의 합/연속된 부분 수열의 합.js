function solution(sequence, k) {
    let minSequence = [];
    let answer = [];
    
    let start = 0;
    let sum = 0;
    for(let i=0; i<sequence.length; i++) {
        sum += sequence[i];
         while (sum > k && start <= i) {
            sum -= sequence[start++];
        }
        
        if(sum===k) {
            if(minSequence.length===0 || minSequence.length>i-start+1) {
                minSequence = sequence.slice(start, i+1);
                answer = [start, i];
            }
        } 
        
    }
    return answer;
}