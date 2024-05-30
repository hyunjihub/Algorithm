function solution(word) {
    var answer = 0;
    
    let set = new Set();
    function DFS(str) {
        set.add(str);
        if(str.length===5) {
            return;
        }
        
        DFS(str+"A");
        DFS(str+"E");
        DFS(str+"I");
        DFS(str+"O");
        DFS(str+"U");
    }
    
    DFS("A");
    DFS("E");
    DFS("I");
    DFS("O");
    DFS("U");
    
    let arr = Array.from(set);
    return arr.indexOf(word)+1;
}