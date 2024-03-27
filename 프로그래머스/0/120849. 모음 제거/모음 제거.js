function solution(my_string) {
    var answer = '';
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for(let i=0; i<my_string.length; i++) {
        if(vowels.indexOf(my_string.charAt(i))===-1) {
            answer += my_string.charAt(i);
        }
    }
    return answer;
}