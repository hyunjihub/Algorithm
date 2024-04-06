function solution(numbers) {
    var answer = new Set();
    for(let i=0; i<numbers.length; i++) {
        for(let j=0; j<numbers.length; j++) {
            if(i===j) continue;
            answer.add(numbers[i]+numbers[j]);
        }
    }
    answer = Array.from(answer);
    answer.sort((a,b)=>a-b);
    return answer;
}