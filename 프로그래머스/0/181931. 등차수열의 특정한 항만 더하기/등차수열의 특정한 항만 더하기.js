function solution(a, d, included) {
    var answer = 0;
    let array = [];
    array[0] = a;
    for(let i=1; i<included.length; i++) {
        array[i] = array[i-1]+d;
    }
    
    for(let i=0; i<included.length; i++) {
        if(included[i]) {
            answer += array[i];
        }
    }
    return answer;
}