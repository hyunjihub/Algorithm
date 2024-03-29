function solution(binomial) {
    var answer = 0;
    let array = binomial.split(" ");
    if(array[1]==='+') {
        answer = parseInt(array[0])+parseInt(array[2]);
    } else if(array[1]==='-') {
        answer = parseInt(array[0])-parseInt(array[2]);
    } else {
        answer = parseInt(array[0])*parseInt(array[2]);
    }
    return answer;
}