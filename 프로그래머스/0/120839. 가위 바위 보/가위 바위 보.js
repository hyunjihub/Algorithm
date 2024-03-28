function solution(rsp) {
    var answer = '';
    for(let i=0; i<rsp.length; i++) {
        if(rsp.charAt(i)==='0') {
            answer += '5';
        } else if(rsp.charAt(i)==='2') {
            answer += '0';
        } else {
            answer += '2';
        }
    }
    return answer;
}