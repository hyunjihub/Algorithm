function solution(myString) {
    var answer = [];
    let array = myString.split("x");
    for(let i=0; i<array.length; i++) {
        answer[i] = array[i].length;
    }
    return answer;
}