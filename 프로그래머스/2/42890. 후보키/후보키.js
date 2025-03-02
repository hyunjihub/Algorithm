function solution(relation) {
    let columnLength = relation[0].length;
    let rowLength = relation.length;
    let candidateKeys = [];

    function isUnique(attributes) {
        let seen = new Set();
        for (let row of relation) {
            let key = attributes.map(attr => row[attr]).join("|");
            if (seen.has(key)) return false;
            seen.add(key);
        }
        return true;
    }

    function isMinimal(attributes) {
        for (let key of candidateKeys) {
            if (key.every(attr => attributes.includes(attr))) {
                return false;
            }
        }
        return true;
    }

    function findCombinations(start, attributes) {
        if (start === columnLength) {
            if (isUnique(attributes) && isMinimal(attributes)) {
                candidateKeys.push(attributes.slice());
            }
            return;
        }

        findCombinations(start + 1, attributes);
        attributes.push(start);
        findCombinations(start + 1, attributes);
        attributes.pop();
    }

    findCombinations(0, []);

    return candidateKeys.length;
}
