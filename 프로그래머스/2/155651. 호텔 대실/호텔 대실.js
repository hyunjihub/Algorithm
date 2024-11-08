function solution(book_time) {
    var answer = 1;
    for(let i=0; i<book_time.length; i++) {
        book_time[i][0] = book_time[i][0].split(":").map(Number);
        book_time[i][0] = 60*book_time[i][0][0] + book_time[i][0][1];
        book_time[i][1] = book_time[i][1].split(":").map(Number);
        book_time[i][1] = 60*book_time[i][1][0] + book_time[i][1][1]+10;
    }
    
    book_time.sort((a, b)=>a[0]-b[0]);
    let used = [[[book_time[0][0], book_time[0][1]]]];
    
    for(let i=1; i<book_time.length; i++) {
        let isEnter = false;
        for(let j=0; j<used.length; j++) {
            let isPossible = true;
            for(let k=0; k<used[j].length; k++) {
                if(used[j][k][0]<=book_time[i][0] && used[j][k][1]>book_time[i][0]) {
                    isPossible = false;
                    break;
                }
            }
            if(isPossible) {
                used[j].push([book_time[i][0], book_time[i][1]]);
                isEnter = true;
                break;
            }
        }
        if(!isEnter) {
            used.push([[book_time[i][0], book_time[i][1]]]);
        }
    }
    
    return used.length;
}