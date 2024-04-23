function solution(n,a,b)
{
    var answer = 0;
    while(true) {
        if(a===b) break;
        if(a%2===0) a = a/2;
        else a = Math.floor(a/2)+1;
        if(b%2===0) b = b/2;
        else b = Math.floor(b/2)+1;
        answer++;
    }
    return answer;
}