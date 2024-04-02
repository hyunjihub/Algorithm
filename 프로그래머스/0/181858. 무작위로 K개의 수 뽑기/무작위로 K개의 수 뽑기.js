function solution(arr, k) {
    var answer = [];
    let set = new Set();
    for(let i=0; i<arr.length; i++) {
        set.add(arr[i]);
    }
    answer = [...set];
    while(true) {
        if(answer.length >= k) break;
        answer.push(-1);
    }
    answer = answer.slice(0, k);
    return answer;
}