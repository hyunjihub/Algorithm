/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let arr = (x+"").split("");
    let reverse = (x+"").split("").reverse();
    let mid = Math.floor(arr.length/2);
    return arr.slice(0, mid).every((i, idx)=>i===reverse[idx]);
};