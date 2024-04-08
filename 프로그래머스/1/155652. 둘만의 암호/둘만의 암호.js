let skip_array = [];

function solution(s, skip, index) {
    var answer = '';
    skip_array = skip.split("");
    skip_array = new Set(skip_array);
    let code = 0;
    for(let i=0; i<s.length; i++) {
        answer += skip_n(s.charAt(i).charCodeAt(), index);
    }
    return answer;
}

function skip_n(start_code, index) {
    let str = '';
    for(let i=0; i<index; i++) {
        while(true) {
            if(start_code===122) {
                str = String.fromCharCode(97);
                start_code = 97;
            } else {
                str = String.fromCharCode(++start_code);
            }
            if(!skip_array.has(str)) break;
        }
    }
    return str;
}