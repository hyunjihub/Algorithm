function solution(rows, columns, queries) {
    var answer = [];
    let matrix = Array.from({ length: rows }, (_, i) =>
        Array.from({ length: columns }, (_, j) => i * columns + j + 1)
    );
    let direction = [
        [0, 1],  // 오른쪽
        [1, 0],  // 아래쪽
        [0, -1], // 왼쪽
        [-1, 0]  // 위쪽
    ];

    for (let i = 0; i < queries.length; i++) {
        let [x1, y1, x2, y2] = queries[i];
        let prev = matrix[x1-1][y1-1];
        let min = prev;
        let x = x1;
        let y = y1;

        for (let d = 0; d < 4; d++) {
            while (true) {
                let nx = x + direction[d][0];
                let ny = y + direction[d][1];

                if (nx < x1 || nx > x2 || ny < y1 || ny > y2) break;
            
                let tmp = matrix[nx-1][ny-1];
                matrix[nx-1][ny-1] = prev;
                prev = tmp;
                min = Math.min(matrix[nx-1][ny-1], min);
                x = nx;
                y = ny;
            }
        }

        answer.push(min);
    }
    
    return answer;
}
