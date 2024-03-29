function solution(intStrs, k, s, l) {
    var answer = [];
    let index = 0;
    let str = "";
    for(let i=0; i<intStrs.length; i++) {
        str = "";
        for(let j=s; j<s+l; j++) {
            str += intStrs[i].charAt(j);
        }
        if(Number(str)>k) {
            answer[index++] = Number(str);
        }
    }
    return answer;
}