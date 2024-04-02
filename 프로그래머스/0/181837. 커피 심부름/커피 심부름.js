function solution(order) {
    var answer = 0;
    for(let i=0; i<order.length; i++) {
        if(order[i].indexOf("americano")!==-1) {
            answer += 4500;
        } else if((order[i].indexOf("cafelatte")!==-1)) {
            answer += 5000;
        } else {
            answer += 4500;
        }
    }
    return answer;
}