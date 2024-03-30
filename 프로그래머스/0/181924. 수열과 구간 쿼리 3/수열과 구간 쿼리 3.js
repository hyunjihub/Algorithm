function solution(arr, queries) {
    var answer = [];
    let tmp = 0;
    for(let i=0; i<queries.length; i++) {
        tmp = arr[queries[i][0]];
        arr[queries[i][0]] = arr[queries[i][1]];
        arr[queries[i][1]] = tmp;
    }
    answer = arr;
    return answer;
}