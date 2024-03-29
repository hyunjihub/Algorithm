function solution(hp) {
    var answer = 0;
    answer = parseInt(hp/5);
    hp = hp%5;
    answer += parseInt(hp/3);
    hp = hp%3;
    answer += hp;
    return answer;
}