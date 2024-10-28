function solution(orders, course) {
    var answer = [];
    
    let map = new Map();
    
    function DFS(menus, prev, order) {
        for(let j=0; j<course.length; j++) {
            if(course[j]===menus.length) {
                if(map.has(menus.join(""))) {
                    map.set(menus.join(""), map.get(menus.join(""))+1);
                } else {
                    map.set(menus.join(""), 1);
                }
            }
        }
        if(menus.length===course[course.length-1]) return;
        
        for(let j=prev+1; j<order.length; j++) {
            DFS([...menus, order[j]], j, order);
        }
    }
    
    for(let i=0; i<orders.length; i++) {
        orders[i] = orders[i].split("").sort().join("");
        for(let j=0; j<orders[i].length; j++) {
            DFS([orders[i][j]], j, orders[i]);
        }
    }
    
    let best = {};
    
    for(let [menu, count] of map) {
        if(count>=2) {
            if(best[menu.length] && best[menu.length][1]<count) {
                best[menu.length] = [[menu], count];
            } else if(best[menu.length] && best[menu.length][1]===count) {
                best[menu.length] = [[...best[menu.length][0], menu], count];
            } else if(!best[menu.length]) {
                best[menu.length] = [[menu], count];
            }
        }
    }
    
    for(let menu in best) {
        answer.push(...best[menu][0]);
    }
    
    return answer.sort();
}