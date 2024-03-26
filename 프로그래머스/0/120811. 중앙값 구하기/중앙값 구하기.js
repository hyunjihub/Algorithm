function solution(array) {
    var answer = 0;
    array.sort((a, b) => a - b);
    let mid = Math.floor(array.length / 2);
    answer = array[mid];
    return answer;
}