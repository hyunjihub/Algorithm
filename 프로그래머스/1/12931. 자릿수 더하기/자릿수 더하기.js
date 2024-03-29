function solution(n)
{
    var answer = 0;
    n = n.toString();
    
    for(let i=0; i<n.length; i++) {
        answer += parseInt(n.charAt(i));
    }

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return answer;
}