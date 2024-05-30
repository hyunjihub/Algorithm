function solution(n, t, m, p) {
    var answer = '';
    
    let game = "";
    function notation(n, num) {
        let result = "";
        if(num===1) return "01";
        while(true) {
            if(num===0) break;
            let rest = num%n;
            if(rest>=10) {
                if(rest===10) rest="A";
                else if(rest===11) rest="B";
                else if(rest===12) rest="C";
                else if(rest===13) rest="D";
                else if(rest===14) rest="E";
                else rest="F";
            }
            result = rest + result;
            num = Math.floor(num/n);
        }
        return result;
    }
    
    let num = 1;
    while(game.length<m*t) {
        game += notation(n, num++);
    }
    for(let i=0; i<t; i++) {
        answer += game.charAt(i*m+(p-1));
    }
    return answer;
}