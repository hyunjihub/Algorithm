function solution(polynomial) {
    var answer = '';
    let num = 0;
    let str = '';
    let str_num = 0;
    polynomial = polynomial.split(" ");
    for(let i=0; i<polynomial.length; i++) {
        str = '';
        if(polynomial[i].indexOf('x')===-1 && polynomial[i]!=='+') {
            num += parseInt(polynomial[i]);
        } else if (polynomial[i]==='+') {
        } else {
            str = polynomial[i].substr(0, polynomial[i].length-1);
            if (str === '') {
                str = '1';
            }
            str_num += parseInt(str);
        }
    }
    
    if(str_num===1) {
        answer += `x`;
    } else if(str_num>1) {
        answer += `${str_num}x`;
    }
    
    if(num>0) {
        if(str_num===0) {
            answer += `${num}`;
        }
        else {
            answer += ` + ${num}`;
        }
    }
    return answer;
}