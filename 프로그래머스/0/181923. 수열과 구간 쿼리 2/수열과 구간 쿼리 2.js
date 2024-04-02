function solution(arr, queries) {
    var answer = [];
    let array = [];
    let has = false;
    for(let i=0; i<queries.length; i++) {
        has = false;
        array = arr.slice(queries[i][0], queries[i][1]+1);
        array.sort((a,b)=>a-b);
        for(let j=0; j<array.length; j++) {
            if(array[j]>queries[i][2]) {
                answer.push(array[j]);
                has = true;
                break;
            }
        }
        if(!has) {
            answer.push(-1);
        }
    }
    return answer;
}