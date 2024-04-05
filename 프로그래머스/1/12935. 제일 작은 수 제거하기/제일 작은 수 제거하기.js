function solution(arr) {
    let min = 99999;
    let index = 0;
    for(let i=0; i<arr.length; i++) {
        if(min>arr[i]) {
            min = arr[i];
            index = i;
        }
    }
    arr.splice(index,1);
    if(arr.length===0) {
        arr.push(-1);
    }
    return arr;
}