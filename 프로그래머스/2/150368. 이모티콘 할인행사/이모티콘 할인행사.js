function solution(users, emoticons) {
    var answer = [0, 0];
    let discountCombinations = [];

    function DFS(depth, current) {
        if (depth === emoticons.length) {
            discountCombinations.push([...current]);
            return;
        }

        DFS(depth + 1, [...current, 10]);
        DFS(depth + 1, [...current, 20]);
        DFS(depth + 1, [...current, 30]);
        DFS(depth + 1, [...current, 40]);
    }

    DFS(0, []);

    for (let discount of discountCombinations) {
        let info = Array.from({ length: users.length }, () => [false, 0]);

        for (let i = 0; i < users.length; i++) {
            let [a, b] = users[i];

            for (let j = 0; j < emoticons.length; j++) {
                if (info[i][0]) break;

                let discountPrice = (emoticons[j] * (100 - discount[j])) / 100;
                if (a <= discount[j]) {
                    if (info[i][1] + discountPrice >= b) {
                        info[i][0] = true;
                    } else {
                        info[i][1] += discountPrice;
                    }
                }
            }
        }

        let tmp = [0, 0];
        for (let i = 0; i < info.length; i++) {
            if (info[i][0]) tmp[0]++;
            else tmp[1] += info[i][1];
        }

        if (answer[0] < tmp[0] || (answer[0] === tmp[0] && answer[1] < tmp[1])) {
            answer[0] = tmp[0];
            answer[1] = tmp[1];
        }
    }

    return answer;
}
