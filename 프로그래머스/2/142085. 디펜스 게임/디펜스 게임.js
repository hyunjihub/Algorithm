function solution(n, k, enemy) {
    
    function isPossible(round) {
        let currentEnemy = enemy.slice(0, round);
        currentEnemy.sort((a, b)=>a-b);
        
        let sum = 0;
        for(let i=0; i<currentEnemy.length-k; i++) {
            sum += currentEnemy[i];
        }
        
        return sum<=n;
    }
    
    let left = 1;
    let right = enemy.length;
    
    while(left<=right) {
        let mid = Math.floor((left+right)/2);
        
        if(isPossible(mid)) {
            left = mid+1;
        } else {
            right = mid-1;
        }
    }
    
    return left-1;
}