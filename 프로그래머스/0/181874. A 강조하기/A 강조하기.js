function solution(myString) {
    var answer = '';
    myString = myString.toLowerCase();
    for(let i=0; i<myString.length; i++) {
        if(myString.charAt(i)==='a') {
            answer += 'A';
        } else {
            answer += myString.charAt(i);
        }
    }
    return answer;
}