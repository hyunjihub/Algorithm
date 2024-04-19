function solution(n)
{
    var ans = 0;
    
    while(true) {
        if(n===0) break;
        if(n%2!==0) ans++;
        n = Math.floor(n/2);
    }

    return ans;
}