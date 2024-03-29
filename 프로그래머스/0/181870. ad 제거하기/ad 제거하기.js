function solution(strArr) {
    var answer = [];
    let index = 0;
    for(let i=0; i<strArr.length; i++) {
        if(strArr[i].indexOf("ad")===-1) {
            answer[index++] = strArr[i];
        }
    }
    return answer;
}