function solution(numbers, target) {
    var answer = 0;
    
    function DFS(depth, sum) {
        if(depth===numbers.length) {
            if(sum===target) {
                answer++;
            }
            return;
        }
        
        DFS(depth+1, sum+numbers[depth]);
        DFS(depth+1, sum+(numbers[depth]*-1));
    }
    
    DFS(0, 0);
    return answer;
}