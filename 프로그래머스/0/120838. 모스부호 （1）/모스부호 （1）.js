const morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
};

function solution(letter) {
    var answer = '';
    letter = letter.split(" ");
    for(let i=0; i<letter.length; i++) {
        let element = letter[i];
        answer += morse[element];
    }
    return answer;
}