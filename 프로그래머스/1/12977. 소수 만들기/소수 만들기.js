function solution(nums) {
    var answer = 0;
    
    for(let i=0; i<nums.length; i++) {
        for(let j=0; j<nums.length; j++) {
            if(i===j) continue;
            if(i>j) continue;
            for(let k=0; k<nums.length; k++) {
                if(i===k || k===j) continue;
                if(j>k) continue;
                if(isPrime(nums[i]+nums[j]+nums[k])) answer++;
            }
        }
    }
    
    return answer;
}

function isPrime(n) {
    let isTrue = true;
    if(n===1) isTrue = false;
    else {
        for(let i=2; i<n; i++) {
            if(n%i===0) {
                isTrue = false;
                break;
            }
        }
    }
    return isTrue;
}