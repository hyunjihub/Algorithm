/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    let repeated = new Set();
    let set = new Set();
    for(let i=0; i<=s.length-10; i++) {
        let sequence = s.slice(i, i+10);
        if(set.has(sequence)) repeated.add(sequence);
        else set.add(sequence);
    }

    return Array.from(repeated);
};