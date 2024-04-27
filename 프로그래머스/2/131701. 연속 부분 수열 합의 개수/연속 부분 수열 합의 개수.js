function solution(elements) {
    let array = 0;
    let set = new Set();
    let sum = 0;
    for(let i=1; i<=elements.length; i++) {
        array = elements.concat(elements.slice(0, i));
        for(let j=0; j<elements.length; j++) {
            sum = 0;
            for(let k=j; k<j+i; k++) {
                sum += array[k];
            }
            set.add(sum);
        }
    }
    return set.size;
}