function solution(info, query) {
    const answer = [];
    const map = new Map();

    const createCombinations = (array, score, start = 0, combination = []) => {
        const key = combination.join('');
        if (!map.has(key)) map.set(key, []);
        map.get(key).push(score);

        for (let i = start; i < array.length; i++) {
            createCombinations(array, score, i + 1, [...combination, array[i]]);
        }
    };

    for (let i = 0; i < info.length; i++) {
        const parts = info[i].split(' ');
        const score = Number(parts.pop());
        createCombinations(parts, score);
    }

    for (const [key, scores] of map.entries()) {
        scores.sort((a, b) => a - b);
    }

    for (let i = 0; i < query.length; i++) {
        const parts = query[i].replace(/ and /g, ' ').split(' ');
        const score = Number(parts.pop());
        const key = parts.filter((v) => v !== '-').join('');

        if (!map.has(key)) {
            answer.push(0);
            continue;
        }

        const scores = map.get(key);
        let left = 0;
        let right = scores.length;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (scores[mid] >= score) right = mid;
            else left = mid + 1;
        }

        answer.push(scores.length - left);
    }

    return answer;
}
