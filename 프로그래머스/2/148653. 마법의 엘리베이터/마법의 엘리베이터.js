function solution(storey) {
    var answer = 0;
    let str = storey+""
    let length = str.length;
    
    for(let i=length-1; i>=0; i--) {
        let num = Number(str[i]);
        
        if(num>5) {
            answer += 10-num;
            if(i>0) {
                str = (Number(str.slice(0, i))+1)+str.slice(i+1);
            } else {
                answer++;
            }
        } else if(num<5) {
            answer += num;
        } else {
            if(i>0 && Number(str[i-1])>=5) {
                str = (Number(str.slice(0, i))+1)+str.slice(i+1);
            }
            answer += 5;
        }
    }
    
    return answer;
}