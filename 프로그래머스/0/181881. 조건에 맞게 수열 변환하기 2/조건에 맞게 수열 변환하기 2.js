function solution(arr) {
    var answer = 0;
    let newArray = arr.slice(0);
    while(true) {
        for(let i=0; i<arr.length; i++) {
            if(arr[i]>=50 && arr[i]%2===0) {
                arr[i] = arr[i]/2;
            } else if(arr[i]<50 && arr[i]%2===1) {
                arr[i] = (arr[i]*2)+1;
            } else {
                arr[i] = arr[i];
            }
        }
        let same = arr.every((value, index) => value === newArray[index]);
        if(same) break;
        answer++;
        newArray = arr.slice(0);
    }
    return answer;
}