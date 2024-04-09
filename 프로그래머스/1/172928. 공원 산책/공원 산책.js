function solution(park, routes) {
    let direction = '';
    let distance = 0;
    let current = [0, 0];
    
    for(let i=0; i<park.length; i++) {
        park[i] = park[i].split("");
    }
    
    function init() {
        park[current[0]][current[1]] = "S";
    }
    
    for(let i=0; i<routes.length; i++) {
        direction = routes[i].split(" ")[0];
        distance = parseInt(routes[i].split(" ")[1]);
        
        for(let j=0; j<park.length; j++) {
            for(let k=0; k<park[0].length; k++) {
                if(park[j][k]==="S") {
                    current = [j, k];
                    break;
                }
            }
        }
        
        park[current[0]][current[1]] = "O";
        
        if(direction==="E") {
            if(distance+current[1]<park[1].length) {
               for(let j=1; j<=distance; j++) {
                   if(park[current[0]][current[1]+j]==="X") {
                       init();
                       break;
                   }
                   if(j===distance) {
                       park[current[0]][current[1]+j] = "S";
                       current = [current[0], current[1]+j];
                   }
                } 
            }
        } else if(direction==="N") {
            if(current[0]-distance>=0) {
                for(let j=1; j<=distance; j++) {
                    if(park[current[0]-j][current[1]]==="X") {
                        init();
                        break;
                    }
                    if(j===distance) {
                        park[current[0]-j][current[1]] = "S";
                        current = [current[0]-j, current[1]];
                    }
                }
            }
        } else if(direction==="S") {
            if(current[0]+distance<park.length) {
                for(let j=1; j<=distance; j++) {
                    if(park[current[0]+j][current[1]]==="X") {
                        init();
                        break;
                    }
                    if(j===distance) {
                        park[current[0]+j][current[1]] = "S";
                        current = [current[0]+j, current[1]];
                    }
                }
            }
        } else {
            if(current[1]-distance>=0) {
                for(let j=1; j<=distance; j++) {
                    if(park[current[0]][current[1]-j]==="X") {
                        init();
                        break;
                    } 
                    if(j===distance) {
                        park[current[0]][current[1]-j] = "S";
                        current = [current[0], current[1]-j];
                    }
                }
            }
        }
    }
    return current;
}