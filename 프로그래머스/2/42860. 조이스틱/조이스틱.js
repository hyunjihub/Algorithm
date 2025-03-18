function solution(name) {
    let answer = 0;
    let n = name.length;
    
    // 기본적으로 오른쪽으로 쭉 가는 경우
    let minMove = n - 1;
    
    for (let i = 0; i < n; i++) {
        let upDown = Math.min(name.charCodeAt(i) - 'A'.charCodeAt(0), 
                              'Z'.charCodeAt(0) - name.charCodeAt(i) + 1);
        answer += upDown;
        
        let next = i + 1;
        while (next < n && name[next] === 'A') next++;

        minMove = Math.min(minMove, i * 2 + n - next, (n - next) * 2 + i);
    }
    
    answer += minMove;
    
    return answer;
}
