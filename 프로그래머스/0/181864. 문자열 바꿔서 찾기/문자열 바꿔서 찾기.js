function solution(myString, pat) {
    var answer = 1;
    let patChange = '';
    for(let i=0; i<pat.length; i++) {
        if(pat.charAt(i)==="A") {
            patChange += 'B';
        } else {
            patChange += 'A';
        }
    }
    
    if(myString.indexOf(patChange)===-1) {
        answer = 0;
    }
    return answer;
}