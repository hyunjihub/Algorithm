function solution(n_str) {
    var answer = '';
    let zero = true;
    for(let i=0; i<n_str.length; i++) {
        if(n_str.charAt(i)!=='0') zero = false;
        if(!zero) answer += n_str.charAt(i);
    }
    return answer;
}