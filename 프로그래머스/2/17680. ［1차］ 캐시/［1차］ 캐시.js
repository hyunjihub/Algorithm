function solution(cacheSize, cities) {
    var answer = 0;
    let cache = new Map();
    let minValue = 0;
    let minKey = "";
    if(cacheSize===0) {
        answer = cities.length*5;
    } else {
        for(let i=0; i<cities.length; i++) {
            minValue = i;
            if(cache.has(cities[i].toLowerCase())) {
                cache.set(cities[i].toLowerCase(), i);
                answer += 1;
            } else if(cache.size>=cacheSize) {
                cache.forEach((value, key) => {
                    if(minValue>value) {
                        minValue = value;
                        minKey = key;
                    }
                });
                cache.delete(minKey);
                cache.set(cities[i].toLowerCase(), i);
                answer += 5;
            } else {
                cache.set(cities[i].toLowerCase(), i);
                answer += 5;
            }
        }
    }
    return answer;
}