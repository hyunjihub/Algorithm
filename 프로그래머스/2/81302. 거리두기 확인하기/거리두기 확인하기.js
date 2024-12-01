function solution(places) {
    var answer = [];
    
    function getIsPossible(place) {
        for(let i=0; i<place.length; i++) {
            place[i] = place[i].split("");
        }
        
        for(let i=0; i<place.length; i++) {
            for(let j=0; j<place.length; j++) {
                if(place[i][j]==="P") {
                    if(j+1<place.length && place[i][j+1]==="P") return false;
                    if(i+1<place.length && place[i+1][j]==="P") return false;
                    if(j+2<place.length && place[i][j+1]!=="X" && place[i][j+2]==="P") return false;
                    if(i+2<place.length && place[i+1][j]!=="X" && place[i+2][j]==="P") return false;
                    if(i+1<place.length && j+1<place.length && place[i+1][j+1]==="P") {
                        if(place[i][j+1]!=="X" || place[i+1][j]!=="X") return false;
                    }
                    if(i-1>=0 && j+1<place.length && place[i-1][j+1]==="P") {
                        if(place[i][j+1]!=="X" || place[i-1][j]!=="X") return false;
                    }
                }
            }
        }
        return true;
    }
    
    for(let i=0; i<places.length; i++) {
        let place = places[i];
        
        let isPossible = getIsPossible(place);
        if(isPossible) {
            answer.push(1);
        } else {
            answer.push(0);
        }
    }
    
    return answer;
}