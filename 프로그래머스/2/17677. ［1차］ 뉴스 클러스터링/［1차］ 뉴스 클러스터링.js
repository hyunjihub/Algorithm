function solution(str1, str2) {
    var answer = 0;
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    
    let map1 = new Map();
    let map2 = new Map();
    let tmp = '';
    let set1 = new Set();
    let set2 = new Set();
    
    for (let i = 0; i < str1.length - 1; i++) {
        if (97 <= str1.charAt(i).charCodeAt() && 122 >= str1.charAt(i).charCodeAt()) {
            if (97 <= str1.charAt(i + 1).charCodeAt() && 122 >= str1.charAt(i + 1).charCodeAt()) {
                tmp = str1.charAt(i) + str1.charAt(i + 1);
                if (map1.has(tmp)) {
                    map1.set(tmp, map1.get(tmp) + 1);
                } else {
                    map1.set(tmp, 1);
                }
                set1.add(tmp);
            }
        }
    }

    for (let i = 0; i < str2.length - 1; i++) {
        if (97 <= str2.charAt(i).charCodeAt() && 122 >= str2.charAt(i).charCodeAt()) {
            if (97 <= str2.charAt(i + 1).charCodeAt() && 122 >= str2.charAt(i + 1).charCodeAt()) {
                tmp = str2.charAt(i) + str2.charAt(i + 1);
                if (map2.has(tmp)) {
                    map2.set(tmp, map2.get(tmp) + 1);
                } else {
                    map2.set(tmp, 1);
                }
                set2.add(tmp);
            }
        }
    }
    
    let union = [];
    let intersection = [];
    if (set1.size === 0 && set2.size === 0) {
        answer = 1;
    } else {
        set1.forEach((value) => {
            if (!map2.has(value)) {
                for (let i = 0; i < map1.get(value); i++) {
                    union.push(value);
                }
            } else {
                for(let i=0; i<Math.min(map1.get(value), map2.get(value)); i++) {
                    intersection.push(value);
                }
                for (let i = 0; i < Math.max(map1.get(value), map2.get(value)); i++) {
                    union.push(value);
                }
            }
        });
        
        set2.forEach((value) => {
            if (!map1.has(value)) {
                for (let i = 0; i < map2.get(value); i++) {
                    union.push(value);
                }
            }
        });
        answer = intersection.length / union.length;
    }
    
    answer = Math.floor(answer * 65536);
    return answer;
}
