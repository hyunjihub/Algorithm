function solution(numbers) {
    numbers = numbers.split("");
    
    let set = new Set();
    
    function isPrime(num) {
        if(num<2) return false;
        else if(num===2) return true;
        
        for(let i=2; i<=Math.floor(Math.sqrt(num)); i++) {
            if(num%i===0) return false;
        }
        return true;
    }
    
    function DFS(depth, number, visited) {
        if(!set.has(Number(number))) {
            if(isPrime(Number(number))) set.add(Number(number));
        }
        
        if(depth===numbers.length) return;
        
        for(let i=0; i<numbers.length; i++) {
            if(!visited[i]) {
                visited[i] = true;
                DFS(depth+1, number+numbers[i], visited);
                visited[i] = false;
            }
        }
    }
    
    let visited = Array.from({length: numbers.length}, ()=>false);
    for(let i=0; i<numbers.length; i++) {
        visited[i] = true;
        DFS(1, numbers[i], visited);
        visited[i] = false;
    }
    
    return set.size;
}