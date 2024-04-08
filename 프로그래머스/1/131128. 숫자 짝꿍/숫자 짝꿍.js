function solution(X, Y) {
    var answer = '';
    let X_array = Array.from({length: 10}, ()=>0);
    let Y_array = Array.from({length: 10}, ()=>0);
    for(let i=0; i<X.length; i++) {
        X_array[parseInt(X.charAt(i))]++;
    }
    for(let i=0; i<Y.length; i++) {
        Y_array[parseInt(Y.charAt(i))]++;
    }
    
    let max = 0;
    for(let i=9; i>=0; i--) {
        max = 0;
        if(X_array[i]>=1 && Y_array[i]>=1) {
            max = X_array[i]<=Y_array[i] ? X_array[i] : Y_array[i];
            for(let j=0; j<max; j++) {
                answer += i;
            }
        }
    }
    
    if(answer.charAt(0)==='0') {
        answer = "0";
    }
    if(answer.length===0) {
        answer = "-1";
    }
    return answer;
}