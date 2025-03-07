function solution(n, info) {
    var answer = [];
    let lionCase = [];
    
    function isLionWinner(lion) {
        let apeachScore = 0;
        let lionScore = 0;
        for (let i = 0; i <= 10; i++) {
            if (lion[i] <= info[i]) {
                if (info[i] !== 0) apeachScore += 10 - i;
            } else {
                lionScore += 10 - i;
            }
        }
        return [apeachScore < lionScore, lionScore-apeachScore];
    }
    
    let maxDiff = 0;
    function DFS(current, lion, count) {
        if (current === 11) {
            if (count < n) {
                lion[10] += (n - count);
                count = n;
            }

            while (lion.length < 11) lion.push(0);

            let [result, diff] = isLionWinner(lion);
            if (result) {
                if (maxDiff < diff) {
                    maxDiff = diff;
                    lionCase = [[...lion]];
                } else if (maxDiff === diff) {
                    for (let i = 10; i >= 0; i--) {
                        if (lion[i] > lionCase[0][i]) {
                            lionCase = [[...lion]];
                            break;
                        } else if (lion[i] < lionCase[0][i]) {
                            break;
                        }
                    }
                }
            }
            return;
        }
        
        DFS(current + 1, [...lion, 0], count);
        if (n >= count + info[current] + 1) {
            DFS(current + 1, [...lion, info[current] + 1], count + info[current] + 1);
        }
    }
    
    DFS(0, [], 0);
    
    if (lionCase.length === 0) return [-1];
    
    return lionCase[0];
}
