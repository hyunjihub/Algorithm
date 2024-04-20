function solution(n, words) {
    var answer = [0, 0];
    let set = new Set();
    set.add(words[0]);
    let last = words[0].charAt(words[0].length-1);
    for(let i=1; i<words.length; i++) {
        if(!set.has(words[i]) && last===words[i].charAt(0)) {
            set.add(words[i]);
            last = words[i].charAt(words[i].length-1);
        } else {
            answer = [i%n+1, Math.floor(i/n)+1];
            break;
        }
    }

    return answer;
}