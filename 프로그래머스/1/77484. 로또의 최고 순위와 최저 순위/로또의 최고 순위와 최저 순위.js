function solution(lottos, win_nums) {
    var answer = [];
    lottos.sort((a,b)=>a-b);
    win_nums.sort((a,b)=>a-b);
    let match = 0;
    let zero = 0;
    for(let i=0; i<lottos.length; i++) {
        if(lottos[i]===0) {
            zero++;
            continue;
        }
        for(let j=0; j<win_nums.length; j++) {
            if(lottos[i]===win_nums[j]) match++;
            if(lottos[i]<win_nums[j]) break;
        }
    }
    
    answer.push(getGrade(match+zero));
    answer.push(getGrade(match));
    return answer;
}

function getGrade(num) {
    if(num===6) return 1;
    else if(num===5) return 2;
    else if(num===4) return 3;
    else if(num===3) return 4;
    else if(num===2) return 5;
    else return 6;
}