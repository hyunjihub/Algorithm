function solution(s){
    var answer = false;
    
    s = s.toLowerCase();
    let p = 0;
    let y = 0;
    
    for(let i=0; i<s.length; i++) {
        if(s.charAt(i)==='p') {
            p++;
        } else if(s.charAt(i)==='y') {
            y++;
        }
    }
    
    if(p===y) answer = true;

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return answer;
}