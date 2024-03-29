function solution(box, n) {
    var answer = 0;
    let width = parseInt(box[0]/n);
    let length = parseInt(box[1]/n);
    let height = parseInt(box[2]/n);
    answer = width*height*height;
    return answer;
}