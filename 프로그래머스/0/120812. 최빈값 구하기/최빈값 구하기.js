function solution(array) {
    var answer = 0;
    let arr = Array.from({length: 1000}, ()=>0);
    for(let i=0; i<array.length; i++) {
        arr[array[i]]++;
    }
    let max = 0;
    for(let i=0; i<arr.length; i++) {
        if(max<arr[i]) {
            max = arr[i];
            answer = i;
        }
    }
    arr.sort((a,b)=>a-b);
    if(arr[arr.length-1]===arr[arr.length-2]) answer = -1;
    return answer;
}