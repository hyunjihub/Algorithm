function solution(topping) {
    var answer = 0;
    
    let cs = new Map();
    let ds = new Map();
    for(let i=0; i<topping.length; i++) {
        if(cs.has(topping[i])) {
            cs.set(topping[i], cs.get(topping[i])+1);
        } else {
            cs.set(topping[i], 1);
        }
    }
    
    for(let i=0; i<topping.length; i++) {
        let get = topping[i];
        if(cs.get(get)===1) {
            cs.delete(get);
        } else {
            cs.set(get, cs.get(get)-1);
        }
        if(ds.has(get)) {
            ds.set(get, cs.get(get)+1);
        } else {
            ds.set(get, 1);
        }
        if(cs.size===ds.size) {
            answer++;
        }
    }
    return answer;
}