/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let result = [];
    for(let i=0; i<=n; i++) {
        let binary = i.toString(2);
        let one = 0;
        for(let j=0; j<binary.length; j++) {
            if(binary[j]==="1") one++;
        }
        result.push(one);
    }

    return result;
};