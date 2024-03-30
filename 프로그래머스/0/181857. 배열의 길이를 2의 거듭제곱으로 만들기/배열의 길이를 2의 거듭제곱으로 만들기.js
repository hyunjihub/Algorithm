function solution(arr) {
    var answer = [];
    let length = arr.length;
    let mul = 0;
    let dup_length = 0;
    while(true) {
        if(2**mul >=length) {
            dup_length = 2**mul;
            break;
        }
        mul++;
    }
    
    for(let i=length; i<dup_length; i++) {
        arr[i] = 0;
    }
    answer = arr;
    return answer;
}