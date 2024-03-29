function solution(order) {
    var answer = 0;
    order = order.toString();
    for(let i=0; i<order.length; i++) {
        if(parseInt(order.charAt(i))===3 || parseInt(order.charAt(i))===6 || parseInt(order.charAt(i))===9) {
            answer++;
        }
    }
    return answer;
}