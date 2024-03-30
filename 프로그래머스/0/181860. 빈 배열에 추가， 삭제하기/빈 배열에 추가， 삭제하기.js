function solution(arr, flag) {
    var answer = [];
    let index = 0;
    let count = 0;
    for(let i=0; i<flag.length; i++) {
        if(flag[i]) {
            for(let j=0; j<arr[i]*2; j++) {
                answer.push(arr[i]);
            }
        } else {
            for(let j=0; j<arr[i]; j++) {
                answer.pop();
            }
        }
    }
    return answer;
}