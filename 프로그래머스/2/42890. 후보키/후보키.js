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

    for (let i = 1; i < (1 << columnLength); i++) {
        let attributes = [];
        for (let j = 0; j < columnLength; j++) {
            if (i & (1 << j)) attributes.push(j);
        }

        if (isUnique(attributes) && isMinimal(attributes)) {
            candidateKeys.push(attributes);
        }
    }

    return candidateKeys.length;
}
