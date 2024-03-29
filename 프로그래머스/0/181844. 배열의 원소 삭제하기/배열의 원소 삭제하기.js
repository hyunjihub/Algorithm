function solution(arr, delete_list) {
    var answer = [];
    let index = 0;
    for(let i=0; i<arr.length; i++) {
        if(delete_list.indexOf(arr[i])===-1) {
            answer[index++] = arr[i];
        }
    }
    return answer;
}