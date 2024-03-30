function solution(arr) {
    var answer = [];
    let start = arr.indexOf(2);
    let end = arr.lastIndexOf(2);
    if(start===-1) {
        answer[0] = -1;
    } else {
        for(let i=start; i<=end; i++) {
            answer.push(arr[i]);
        }
    }
    
    return answer;
}