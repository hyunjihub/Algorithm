function solution(arr) {
    var answer = [0, 0];
    
    let n = arr.length;
    
    function div(n, startX, startY) {
        let num = arr[startY][startX];
        let isSame = true;
        for(let i=startY; i<startY+n; i++) {
            for(let j=startX; j<startX+n; j++) {
                if(num!==arr[i][j]) {
                    isSame = false;
                    break;
                }
            }
            if(!isSame) break;
        }
        
        if(isSame) {
            if(num===0) answer[0]++;
            else answer[1]++;
        } else if(n > 1){
            let size = n/2;
            div(size, startX, startY);
            div(size, startX+size, startY);
            div(size, startX, startY+size);
            div(size, startX+size, startY+size);
        }
    }
    
    div(n, 0, 0);
    
    return answer;
}

