function solution(bin1, bin2) {
    var answer = '';
    let tmp = '';
    if(bin1.length<bin2.length) {
        tmp = bin1;
        bin1 = bin2;
        bin2 = tmp;
    }
    while(true) {
        if(bin1.length===bin2.length) break;
        bin2 = '0' + bin2;
    }
    
    let has = false;
    let carry = 0;
    for(let i=bin2.length-1; i>=0; i--) {
        if(has) {
            carry = parseInt(bin1.charAt(i))+parseInt(bin2.charAt(i))+1;
            has = false;
        } else {
            carry = parseInt(bin1.charAt(i))+parseInt(bin2.charAt(i));
        }
        if(carry>=2) {
            has = true;
            carry = carry%2;
        }
        answer = carry.toString() + answer;
    }
    if(has) {
        answer = '1' + answer;
    }
    return answer;
}