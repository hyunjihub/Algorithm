function solution(n, numlist) {
    var answer = [];
    let index = 0;
    for(let i=0; i<numlist.length; i++) {
        if(numlist[i]%n==0) {
            answer[index++] = numlist[i];
        }
    }
    return answer;
}