function solution(arr1, arr2) {
    var answer = 0;
    let sum1 = 0;
    let sum2 = 0;
    if(arr1.length!==arr2.length) {
        answer = arr1.length>arr2.length ? 1 : -1;
    } else {
        for(let i=0; i<arr1.length; i++) {
            sum1 += arr1[i];
        }
        for(let i=0; i<arr2.length; i++) {
            sum2 += arr2[i];
        }
        if(sum1>sum2) answer = 1;
        else if(sum1<sum2) answer = -1;
    }
    return answer;
}