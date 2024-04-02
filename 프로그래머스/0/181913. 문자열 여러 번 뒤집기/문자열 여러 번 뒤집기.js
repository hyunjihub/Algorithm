function solution(my_string, queries) {
    var answer = '';
    let tmp = '';
    for(let i=0; i<queries.length; i++) {
        tmp = '';
        for(let j=queries[i][1]; j>=queries[i][0]; j--) {
            tmp += my_string.charAt(j);
        }
        my_string = my_string.substring(0, queries[i][0]) + tmp + my_string.substring(queries[i][1] + 1);
    }
    answer = my_string;
    return answer;
}