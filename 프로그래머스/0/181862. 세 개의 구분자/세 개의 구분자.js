function solution(myStr) {
    var answer = [];
    let str = '';
    let index = 0;
    for(let i=0; i<myStr.length; i++) {
        str = '';
        while(true) {
            if(i>=myStr.length) {
                if(str!=='') {
                    answer[index++] = str;
                }
                break;
            }
            if(myStr.charAt(i)==='a' || myStr.charAt(i)==='b' || myStr.charAt(i)==='c') {
                if(str!=='') {
                    answer[index++] = str;
                }
                break;
            }
            str += myStr.charAt(i);
            i++;
        }
    }
    
    if(answer.length===0) {
        answer[0] = "EMPTY";
    }
    return answer;
}