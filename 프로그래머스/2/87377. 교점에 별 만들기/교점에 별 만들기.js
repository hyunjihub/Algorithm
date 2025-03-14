function solution(line) {
    var answer = [];
    let meet = [];

    let left = Infinity, right = -Infinity;
    let top = Infinity, bottom = -Infinity;

    for (let i = 0; i < line.length; i++) {
        for (let j = i + 1; j < line.length; j++) {
            let denominator = line[i][0] * line[j][1] - line[i][1] * line[j][0];
            if (denominator === 0) continue; // 평행한 경우 제외

            let x = (line[i][1] * line[j][2] - line[i][2] * line[j][1]) / denominator;
            let y = (line[i][2] * line[j][0] - line[i][0] * line[j][2]) / denominator;

            if (Number.isInteger(x) && Number.isInteger(y)) {
                meet.push([x, y]);
                left = Math.min(left, x);
                right = Math.max(right, x);
                top = Math.min(top, y);
                bottom = Math.max(bottom, y);
            }
        }
    }

    let draw = Array.from({ length: bottom - top + 1 }, () => Array(right - left + 1).fill("."));
    for (let i = 0; i < meet.length; i++) {
        let [idX, idY] = meet[i];
        idX -= left;
        idY -= top;
        draw[bottom - top - idY][idX] = "*";
    }

    for (let i = 0; i < draw.length; i++) {
        draw[i] = draw[i].join("");
    }
    return draw;
}
