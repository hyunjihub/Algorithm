function solution(emergency) {
    var answer = [];
    let check = Array.from({length: emergency.length}, () => false);
    let max = 0;
    let max_i = 0;
    for(let i=0; i<emergency.length; i++) {
        max = 0;
        max_i = 0;
        for(let j=0; j<emergency.length; j++) {
            if(!check[j] && max<emergency[j]) {
                max = emergency[j];
                max_i = j;
            }
        }
        answer[max_i] = i+1;
        check[max_i] = true;
    }
    return answer;
}