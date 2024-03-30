function solution(array, n) {
    var answer = 0;
    let close = 101;
    array.sort((a,b)=>a-b);
    for(let i=0; i<array.length; i++) {
        if(close>Math.abs(n-array[i])) {
            answer = array[i];
            close = Math.abs(n-array[i]);
        }
    }
    return answer;
}