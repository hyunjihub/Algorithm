const english = {
    "zero" : 0,
    "one" : 1,
    "two" : 2,
    "three" : 3,
    "four" : 4,
    "five" : 5,
    "six" : 6,
    "seven" : 7,
    "eight" : 8,
    "nine" : 9
};

function solution(s) {
    var answer = '';
    let str = '';
    for(let i=0; i<s.length; i++) {
        if(!isNaN(parseInt(s.charAt(i)))) {
            answer += s.charAt(i);
        } else {
            str += s.charAt(i);
            if(getNumber(str)!==undefined) {
                answer += getNumber(str);
                str = '';
            }
        }
    }
    return parseInt(answer);
}

function getNumber(s) {
    return english[s];
}