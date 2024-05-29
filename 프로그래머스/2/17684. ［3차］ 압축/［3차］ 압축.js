function solution(msg) {
    var answer = [];
    let dictionary = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    dictionary = new Map(dictionary.map((item, index) => [item, index+1]));
    let key = 27;
    for(let i=0; i<msg.length; i++) {
        let char = msg.charAt(i);
        let index = i+1;
        while(true) {
            if (index >= msg.length || !dictionary.has(char + msg.charAt(index))) {
                answer.push(dictionary.get(char));
                if (index < msg.length) {
                    dictionary.set(char + msg.charAt(index), key++);
                }
                break;
            } else {
                char += msg.charAt(index++);
                i++;
            }
        }
    }
    return answer;
}