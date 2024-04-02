function solution(str_list) {
    var answer = [];
    let first_l = false;
    let first_r = false;
    let index = 0;
    for(let i=0; i<str_list.length; i++) {
        if(str_list[i]==='l') {
            first_l = true;
            index = i;
            break;
        } else if(str_list[i]==='r') {
            first_r = true;
            index = i;
            break;
        }
    }
    if(first_l) {
        for(let i=0; i<index; i++) {
            answer.push(str_list[i]);
        }
    } else if(first_r) {
        for(let i=index+1; i<str_list.length; i++) {
            answer.push(str_list[i]);
        }
    } 
    return answer;
}