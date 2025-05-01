function solution(begin, target, words) {
    var answer = Infinity;

    function getDiff(str1, str2) {
        let diff = 0;
        
        for(let i=0; i<str1.length; i++) {
            if(str1[i]!==str2[i]) diff++;
            if(diff>1) return false;
        }
        
        return diff===1;
    }
    
    function DFS(str, count, used) {
        if(str===target) {
            answer = Math.min(count, answer);
            return;
        }
        
        if(count>answer) return;
        
        for(let i=0; i<words.length; i++) {
            if(!used[i] && getDiff(str, words[i])) {
                used[i] = true;
                DFS(words[i], count+1, used);
                used[i] = false;
            }
        }
    }
    
    let used = Array.from({length: words.length}, ()=>false);
    DFS(begin, 0, used);
    
    return answer === Infinity ? 0 : answer;
}