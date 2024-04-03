function solution(dots) {
    var answer = 0;
    dots.sort((a,b)=>{
        if(a[0]===b[0]) {
            return a[1]-b[1];
        } else {
            return a[0]-b[0];
        }
    });
    
    let length1 = Math.abs(dots[0][1]-dots[1][1]);
    let length2 = Math.abs(dots[0][0]-dots[2][0]);
    answer = length1*length2;
    return answer;
}