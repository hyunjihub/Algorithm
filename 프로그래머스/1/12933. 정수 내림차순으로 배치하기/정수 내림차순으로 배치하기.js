function solution(n) {
    var answer = "";
    n = n.toString();
    let array = Array.from(n);
    array.sort();
    for(let i=array.length-1; i>=0; i--) {
        answer += array[i];
    }
    answer = Number(answer);
    
    return answer;
}