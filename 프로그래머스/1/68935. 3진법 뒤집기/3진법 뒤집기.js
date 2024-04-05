function solution(n) {
    var answer = 0;
    let str = '';
    while(true) {
        if(Math.floor(n/3)===0) break;
        str = (n%3)+str;
        n = Math.floor(n/3);
    }
    str = n+str;
    str = str.split("").reverse().toString().replaceAll(',','');
    let cal = 0;
    for(let i=0; i<str.length; i++) {
        cal = parseInt(str.charAt(str.length-1-i))*(3**i);
        answer += cal;
    }
    return answer;
}