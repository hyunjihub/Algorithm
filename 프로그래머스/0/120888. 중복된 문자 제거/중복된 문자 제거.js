function solution(my_string) {
    var answer = '';
    const strset = new Set();
    for(let i=0; i<my_string.length; i++) {
        strset.add(my_string.charAt(i));
    }
    for(const c of strset) {
        answer+= c;
    }
    return answer; 
}