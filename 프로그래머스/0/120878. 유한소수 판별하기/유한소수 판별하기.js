function solution(a, b) {
    var answer = 1;
    
    let div = 2;
    while(true) {
        if(div>b) break;
        if(a%div===0 && b%div===0) {
            a /= div;
            b /= div;
            div = 1;
        }
        div++;
    }
    
    while(true) {
        if(b===1) {
            answer = 1;
            break;
        }
        if(b%2!==0 && b%5!==0) {
            answer = 2;
            break;
        }
        
        if(b%2===0) {
            b /= 2;
        }
        if(b%5===0) {
            b /= 5;
        }
    }
    return answer;
}