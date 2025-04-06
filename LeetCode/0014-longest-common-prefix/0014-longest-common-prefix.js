/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let common = strs[0];

    for(let i=1; i<strs.length; i++) {
        let tmp = "";
        for(let j=0; j<Math.min(strs[i].length, common.length); j++) {
            if(strs[i][j]===common[j]) tmp += common[j];
            else break;
        }
        common = tmp;
    }

    return common;
};