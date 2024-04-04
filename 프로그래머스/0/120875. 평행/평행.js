function solution(dots) {
    var answer = 0;
    const [a, b, c, d] = dots;
    
    if((parallel(a, b, c, d)||parallel(a, c, b, d))||parallel(a, d, b, c)) {
        answer = 1;
    }
    return answer;
}

function parallel(a, b, c, d) {
    let isParallel = false;
    let first = (b[1]-a[1])/(b[0]-a[0]);
    let second = (d[1]-c[1])/(d[0]-c[0]);
    
    if(first===second) isParallel = true;
    return isParallel;
}