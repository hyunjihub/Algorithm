function solution(food) {
    var answer = '';
    for(let i=1; i<food.length; i++) {
        for(let j=0; j<Math.floor(food[i]/2); j++) {
            answer += i;
        }
    }
    let reverse = answer.split("").reverse().toString().replaceAll(',','');
    answer += 0 + reverse;
    return answer;
}