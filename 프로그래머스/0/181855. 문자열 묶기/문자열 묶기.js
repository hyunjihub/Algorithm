function solution(strArr) {
    var answer = 0;
    let count = Array(31).fill(0);
    for(let i=0; i<strArr.length; i++) {
        count[strArr[i].length]++;
    }
    count.sort((a,b)=>b-a);
    answer = count[0];
    return answer;
}