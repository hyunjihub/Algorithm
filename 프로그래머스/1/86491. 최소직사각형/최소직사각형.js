function solution(sizes) {
    var answer = 0;
    let tmp = 0;
    for(let i=0; i<sizes.length; i++) {
        if(sizes[i][0]>sizes[i][1]) {
            tmp = sizes[i][0];
            sizes[i][0] = sizes[i][1];
            sizes[i][1] = tmp;
        }
    }
    let max_w = 0;
    let max_h = 0;
    for(let i=0; i<sizes.length; i++) {
        if(sizes[i][0]>max_w) {
            max_w = sizes[i][0];
        }
        if(sizes[i][1]>max_h) {
            max_h = sizes[i][1];
        }
    }
    answer = max_w*max_h;
    return answer;
}