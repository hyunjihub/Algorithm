function solution(babbling) {
    var answer = 0;
    for(let i=0; i<babbling.length; i++) {
        if(babbling[i].replace("aya", " ").replace("ye", " ").replace("woo", " ").replace("ma", " ").trim()==="") {
            answer++;
        }
    }
    return answer;
}