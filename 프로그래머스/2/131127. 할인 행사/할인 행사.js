function solution(want, number, discount) {
    var answer = 0;
    const wishlist = new Map(want.map((want, index) => [want, number[index]]));
    let map = new Map();
    let isSame = true;
    for(let i=0; i<discount.length-9; i++) {
        map = new Map();
        isSame = true;
        for(let j=i; j<i+10; j++) {
            if(map.has(discount[j])) {
                map.set(discount[j], map.get(discount[j])+1);
            } else {
                map.set(discount[j], 1);
            }
        }
        for (let [key, value] of wishlist) {
            if (!map.has(key) || map.get(key) !== value) {
                isSame = false;
            }
        }
        if(isSame) answer++;
    }
    return answer;
}