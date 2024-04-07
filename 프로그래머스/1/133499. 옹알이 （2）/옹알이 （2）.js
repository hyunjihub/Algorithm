function solution(babbling) {
    var answer = 0;
    for(let i=0; i<babbling.length; i++) {
        if(babbling[i].replaceAll("aya", " ").replaceAll("ye", " ").replaceAll("woo", " ").replaceAll("ma", " ").trim()==="") {
            if(babbling[i].indexOf("ayaaya")===-1 && babbling[i].indexOf("yeye")===-1 && babbling[i].indexOf("woowoo")===-1 && babbling[i].indexOf("mama")===-1) {
                answer++;
            }
        }
    }
    return answer;
}