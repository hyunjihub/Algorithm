function solution(myString) {
    var answer = myString.split("x").filter(idx=>idx!=='');
    answer.sort();
    return answer;
}