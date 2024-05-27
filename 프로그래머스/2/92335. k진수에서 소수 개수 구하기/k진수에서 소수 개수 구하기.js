function solution(n, k) {
    let answer = 0;
    let cal = "";
    if(k!==10) {
       cal = conversion(n, k);
    } else {
        cal = n+"";
    }
    
   let numbers = cal.split("0").filter(str=>str!=="").map(Number);
    for(let i=0; i<numbers.length; i++) {
        if(isPrime(numbers[i])) {
            answer++;
        }
    }
    return answer;
}

function conversion(n, k) {
    let result = "";
    while(true) {
        if(n===0) break;
        result = (n%k) + result;
        n = Math.floor(n/k);
    }
    return result;
}

function isPrime(n) {
    if(n===1) return false;
    for(let i=2; i*i<=n; i++) {
        if(n%i===0) {
            return false;
        }
    }
    return true;
}