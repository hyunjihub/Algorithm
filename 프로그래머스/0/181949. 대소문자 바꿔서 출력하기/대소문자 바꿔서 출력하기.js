const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    let answer = '';
    str = input[0];
    for(let i=0; i<str.length; i++) {
        if(str.charAt(i).charCodeAt()<97) {
            answer += str.charAt(i).toLowerCase();
        } else {
            answer += str.charAt(i).toUpperCase();
        }
    }
    console.log(answer);
});