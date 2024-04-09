function solution(numbers, hand) {
    var answer = '';
    let pad = [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"], ["*", "0", "#"]]
    let current = [[3, 0],[3, 2]];
    let target = [0, 0];
    
    function useLeft() {
        current[0] = target;
        answer += "L";
    }

    function useRight() {
        current[1] = target;
        answer += "R";
    }
    
    for(let i=0; i<numbers.length; i++) {
        for(let j=0; j<pad.length; j++) {
            for(let k=0; k<pad[0].length; k++) {
                if(pad[j][k]===numbers[i].toString()) {
                    target = [j, k];
                    break;
                }
            }
        }
        if(numbers[i]===1 || numbers[i]===4 || numbers[i]===7) {
            useLeft();
        } else if(numbers[i]===3 || numbers[i]===6 || numbers[i]===9) {
            useRight();
        } else {
            if(Math.abs(current[0][0]-target[0])+Math.abs(current[0][1]-target[1])>Math.abs(current[1][0]-target[0])+Math.abs(current[1][1]-target[1])) {
                useRight();
            } else if(Math.abs(current[0][0]-target[0])+Math.abs(current[0][1]-target[1])<Math.abs(current[1][0]-target[0])+Math.abs(current[1][1]-target[1])) {
                useLeft();
            } else {
                if(hand==="right") {
                    useRight();
                } else {
                    useLeft();
                }
            }
        }
    }
    return answer;
}

