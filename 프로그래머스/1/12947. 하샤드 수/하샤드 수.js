function solution(x) {
    var answer = false;
    let str = x.toString();
    let sum = 0;
    for(let i=0; i<str.length; i++) {
        sum += Number(str.charAt(i));
    }
    if(x%sum===0) {
        answer = true;
    }
    return answer;
}