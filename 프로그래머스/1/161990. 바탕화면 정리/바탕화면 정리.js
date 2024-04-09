function solution(wallpaper) {
    var answer = [];
    let down = 0;
    let up = wallpaper.length;
    let right = 0;
    let left = wallpaper[0].length;
    for(let i=0; i<wallpaper.length; i++) {
        for(let j=0; j<wallpaper[i].length; j++) {
            if(wallpaper[i].charAt(j)==="#") {
                if(up>i) up = i;
                if(down<i+1) down = i+1;
                if(right<j+1) right = j+1;
                if(left>j) left = j;
            }
        }
    }
    answer = [up, left, down, right];
    return answer;
}
