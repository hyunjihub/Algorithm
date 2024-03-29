function solution(myString, pat) {
    var answer = 1;
    myString = myString.toLowerCase();
    pat = pat.toLowerCase();
    
    if(myString.indexOf(pat)===-1) {
        answer = 0;
    }
    return answer;
}