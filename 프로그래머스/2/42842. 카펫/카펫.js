function solution(brown, yellow) {
    var answer = [];
    let width = 0;
    let height = 0;
    for(let i=3; i<=brown; i++) {
        for(let j=3; j<=brown; j++) {
            if(i<j) continue;
            width = i;
            height = j-2;
            if((width*2)+(2*height)===brown && (width-2)*height===yellow) {
                answer = [i, j];
            }
        }
    }
    return answer;
}