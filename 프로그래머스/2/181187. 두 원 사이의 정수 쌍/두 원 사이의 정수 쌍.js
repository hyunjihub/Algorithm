function solution(r1, r2) {
    let answer1 = 0;
    let y = r1;
    
    for (let x = 1; x < r1; x++) {
        while ((x * x + y * y) >= (r1 * r1)) {
            y = y - 1;
        }
        answer1 = answer1 + y;
    }
    answer1 = answer1 * 4 + (r1 - 1) * 4 + 1;

    y = r2;
    let answer2 = 0;
    for (let x = 1; x < r2; x++) {
        while ((x * x + y * y) > (r2 * r2)) {
            y = y - 1;
        }
        answer2 = answer2 + y;
    }
    answer2 = answer2 * 4 + r2 * 4 + 1;

    let answer = answer2 - answer1;
    return answer;
}
