function solution(str1, str2) {
    var answer = 1;
    if(str2.indexOf(str1)===-1) {
        answer = 0;
    }
    return answer;
}