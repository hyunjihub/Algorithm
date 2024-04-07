function solution(a, b) {
    var answer = '';
    a = month[a];
    a += b-1;
    if(a%7===1) {
        answer = 'FRI';
    } else if(a%7===2) {
        answer = 'SAT';
    } else if(a%7===3) {
        answer = 'SUN';
    } else if(a%7===4) {
        answer = 'MON';
    } else if(a%7===5) {
        answer = 'TUE';
    } else if(a%7===6) {
        answer = 'WED';
    } else if(a%7===0) {
        answer = 'THU';
    }
    return answer;
}

const month = {
    1 : 1,
    2 : 32,
    3 : 61,
    4 : 92,
    5 : 122,
    6 : 153,
    7 : 183,
    8 : 214,
    9 : 245,
    10 : 275,
    11 : 306,
    12 : 336
}