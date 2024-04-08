function solution(keymap, targets) {
    var answer = [];
    let max_length = 0;
    for(let i=0; i<keymap.length; i++) {
        if(keymap[i].length>max_length) max_length = keymap[i].length;
    }
    
    let index = 0;
    let length = 0;
    let word = '';
    let count = 0;
    let typing = false;
    let cant = false;
    for(let i=0; i<targets.length; i++) {
        cant = false;
        count = 0;
        for(let j=0; j<targets[i].length; j++) {
            index = 0;
            length = 0;
            typing = false;
            word = targets[i].charAt(j);
            while(true) {
                if(length===max_length) break;
                for(let k=0; k<keymap.length; k++) {
                    if(keymap[k].charAt(length)===word) {
                        count += length+1;
                        typing = true;
                        break;
                    }
                }
                if(typing) break;
                length++;
            }
            if(!typing) {
                cant = true;
                break;
            }
        }
        if(cant) {
            answer.push(-1);
        } else {
            answer.push(count);
        }
    }
    
    return answer;
}