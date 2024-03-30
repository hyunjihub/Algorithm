function solution(myString, pat) {
    var answer = '';
    let index = myString.lastIndexOf(pat);
    for(let i=0; i<index+pat.length; i++) {
        answer += myString.charAt(i);
    }
    return answer;
}