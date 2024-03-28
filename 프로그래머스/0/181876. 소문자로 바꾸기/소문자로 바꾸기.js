function solution(myString) {
    var answer = '';
    for(let i=0; i<myString.length; i++) {
        answer += myString.charAt(i).toLowerCase();
    }
    return answer;
}