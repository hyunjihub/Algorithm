function solution(a, b, c, d) {
    var answer = 0;
    let dice = [a, b, c, d];
    dice.sort((n1,n2)=>n1-n2);
    let result = same(dice);
    if(result===3) {
        answer = 1111*a;
    } else if(result===2) {
        if(dice[0]===dice[1]) {
            answer = (10*dice[0]+dice[3])**2;
        } else {
            answer = (10*dice[1]+dice[0])**2;
        }
    } else if(result===1) {
        if(dice[0]===dice[1] && dice[2]===dice[3]) {
            answer = (dice[0]+dice[2])*Math.abs(dice[0]-dice[2]);
        } else {
            if(dice[0]===dice[1]) {
                answer = dice[2]*dice[3];
            } else if(dice[1]===dice[2]) {
                answer = dice[0]*dice[3];
            } else {
                answer = dice[0]*dice[1];
            }
        }
    } else {
        answer = dice[0];
    }
    return answer;
}

function same(dice) {
    let max = 0;
    let current = 0;
    let count = 0;
    for(let i=0; i<dice.length; i++) {
        current = dice[i];
        count = 0;
        for(let j=0; j<dice.length; j++) {
            if(i===j) continue;
            if(current===dice[j]) {
                count++;
            }
        }
        if(max<count) {
            max = count;
        }
    }
    return max;
}