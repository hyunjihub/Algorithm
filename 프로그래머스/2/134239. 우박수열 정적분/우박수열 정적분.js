function solution(k, ranges) {
    var answer = [];
    
    let collatz = [k];
    while(k>1) {
        if(k%2===0) {
            k /= 2;
        } else {
            k = 3*k+1;
        }
        collatz.push(k);
    }
    
    let area = [];
    for(let i=0; i<collatz.length-1; i++) {
        area.push((collatz[i]+collatz[i+1])/2);
    }
    
    for(let i=0; i<ranges.length; i++) {
        let [a, b] = ranges[i];
        if(a===0 && b===0) {
            answer.push(area.reduce((acc, cur)=>acc+=cur, 0));
        } else {
            let max = collatz.length-1+b;
            if(a>max) {
                answer.push(-1);
            }
            else {
                let sum = 0;
                for(let j=a; j<max; j++) {
                    sum += area[j];
                }
                answer.push(sum);
            }
        }
    }

    return answer;
}