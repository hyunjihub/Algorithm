function solution(arrayA, arrayB) {
    function gcd(n1, n2) {
      let remainder = n1 % n2;
      return n2 === 0 ? n1 : gcd(n2, remainder);
    };
    
    let gcdA = arrayA[0];
    let gcdB = arrayB[0];
    
    for(let i=1; i<arrayA.length; i++) {
        gcdA = gcd(gcdA, arrayA[i]);
        gcdB = gcd(gcdB, arrayB[i]);
    }
    
    if(gcdA===1) gcdA = 0;
    if(gcdB===1) gcdB = 0;
    
    let answer = 0;
    if(arrayA.every(num => num%gcdB!==0)) answer = Math.max(answer, gcdB);
    if(arrayB.every(num => num%gcdA!==0)) answer = Math.max(answer, gcdA);
    
    return answer;
}