function solution(queue1, queue2) {
    let answer = -1;
    let N = queue1.length;
    let queue3 = queue1.concat(queue2);
    
    let sum1 = 0;
    let sum2 = 0;
    for(let i=0; i<N; i++) {
        sum1 += queue1[i];
        sum2 += queue2[i];
    }
    
    let sum = sum1+sum2;
    
    let pointer1 = 0;
    let pointer2 = N;
    
    let count = 0;
    while(count <= queue3.length*2) {
        if(sum1===sum/2) {
            return count;
        } else if(sum1<sum/2) {
            sum1 += queue3[pointer2++];
        } else {
            sum1 -= queue3[pointer1++];
        }
        count++;
    }

    return answer;
}