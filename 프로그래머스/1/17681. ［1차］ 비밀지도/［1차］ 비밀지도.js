function solution(n, arr1, arr2) {
    var answer = [];
    let map = '';
    for(let i=0; i<arr1.length; i++) {
        map = '';
        arr1[i] = binary(arr1[i], n);
        arr2[i] = binary(arr2[i], n);
        for(let j=0; j<n; j++) {
            if(arr1[i].charAt(j)==='1' || arr2[i].charAt(j)==='1') {
                map += "#";
            } else {
                map += " ";
            }
        }
        answer.push(map);
    }
    return answer;
}
    
function binary(n, length) {
    let answer = '';
    while(true) {
        if(n===0) break;
        answer = n%2 + answer;
        n = Math.floor(n/2);
    }
    while(true) {
        if(answer.length===length) break;
        answer = 0 + answer;
    }
    return answer;
}