/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let sPointer = 0;
    let tPointer = 0;

    while(true) {
        if(tPointer===t.length || sPointer===s.length) break;
        if(t[tPointer]===s[sPointer]) sPointer++;
        tPointer++;
    }

    return sPointer===s.length;
};