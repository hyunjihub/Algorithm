function solution(people, limit) {
    var answer = 0;
    people.sort((a, b)=>b-a);
    
    let front = 0;
    let back = people.length-1;
    while(true) {
        if(front>back) break;
        if(front===back) {
            answer++;
            front++;
        } else {
            if(people[front]+people[back]<=limit) {
                answer++;
                front++;
                back--;
            } else {
                answer++;
                front++;
            }
        }
    }
    return answer;
}