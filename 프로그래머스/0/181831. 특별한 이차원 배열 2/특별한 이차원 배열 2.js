function solution(arr) {
    var answer = 0;
    let isTrue = true;
    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<arr.length; j++) {
            if(arr[i][j]!==arr[j][i]) {
                isTrue = false;
                break;
            }
        }
    }
    if(isTrue) {
        answer = 1;
    }
    return answer;
}