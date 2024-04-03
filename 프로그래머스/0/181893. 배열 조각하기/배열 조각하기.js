function solution(arr, query) {
    var answer = [];
    for(let i=0; i<query.length; i++) {
        if(i%2===0) {
            arr = arr.slice(0, query[i]+1);
        } else {
            arr = arr.slice(query[i]);
        }
    }
    answer = arr;
    return answer;
}