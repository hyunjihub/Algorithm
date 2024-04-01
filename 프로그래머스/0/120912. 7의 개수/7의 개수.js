function solution(array) {
    var answer = 0;
    let str = '';
    for(let i=0; i<array.length; i++) {
        str = array[i].toString();
        for(let j=0; j<str.length; j++) {
            if(str.charAt(j)==='7') {
                answer++;
            }
        }
    }
    return answer;
}