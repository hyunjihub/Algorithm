function solution(age) {
    var answer = '';
    age = age.toString();
    let n = 0;
    for(let i=0; i<age.length; i++) {
        n = parseInt(age.charAt(i));
        answer += String.fromCharCode(97+n);
    }
    return answer;
}