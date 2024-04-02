function solution(sides) {
    var answer = 0;
    sides.sort((a,b)=>a-b);
    //b가 제일 클 경우
    for(let i=1; i<=sides[1]; i++) {
        if(sides[0]+i>sides[1]) {
            answer++;
        }
    }
    //a,b보다 클 경우
    for(let i=sides[1]+1; i<sides[0]+sides[1]; i++) {
        if(i+sides[0]>sides[1]) {
            answer++;
        }
    }
    return answer;
}