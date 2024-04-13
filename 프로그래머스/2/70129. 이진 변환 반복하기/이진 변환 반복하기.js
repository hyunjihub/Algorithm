function solution(s) {
    var answer = [];
    let zero = 0;
    let length = s.length;
    let count = 0;
    while(s!=="1") {
        s = s.replaceAll("0","");
        zero += length - s.length;
        s = binary(s.length);
        length = s.length;
        count++;
    }
    answer = [count, zero];
    return answer;
}

function binary(n) {
    let str = '';
    while(true) {
        if(n===0) break;
        str = n%2 + str;
        n = Math.floor(n/2);
    }
    return str;
}