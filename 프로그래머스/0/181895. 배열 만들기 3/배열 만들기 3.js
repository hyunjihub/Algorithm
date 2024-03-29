function solution(arr, intervals) {
    var answer = [];
    let index = 0;
    for(let i=intervals[0][0]; i<=intervals[0][1]; i++) {
        answer[index++] = arr[i];
    }
    for(let i=intervals[1][0]; i<=intervals[1][1]; i++) {
        answer[index++] = arr[i];
    }
    return answer;
}