function solution(arr) {
    var answer = [[]];
    let diff = 0;
    if(arr.length>arr[0].length) {
        diff = arr.length-arr[0].length;
        for(let i=0; i<arr.length; i++) {
            for(let j=0; j<diff; j++) {
                arr[i].push(0);
            }
        }
    } else if(arr.length<arr[0].length) {
        diff = arr[0].length-arr.length;
        let zero = Array.from({length:arr[0].length}, ()=>0);
        for(let i=0; i<diff; i++) {
            arr.push(zero);
        }
    }
    answer = arr;
    return answer;
}