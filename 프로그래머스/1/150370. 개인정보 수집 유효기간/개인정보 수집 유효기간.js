function solution(today, terms, privacies) {
    var answer = [];
    for(let i=0; i<terms.length; i++) {
        terms[i] = terms[i].split(" ");
    }
    
    let date = '';
    let type = '';
    let expiration = 0;
    let year = 0;
    let month = 0;
    let day = 0;
    
    let today_year = 0;
    let today_month = 0;
    let today_day = 0;
    
    today = today.split(".");
    today_year = parseInt(today[0]);
    today_month = parseInt(today[1]);
    today_day = parseInt(today[2]);
    
    let expiration_date = '';
    for(let i=0; i<privacies.length; i++) {
        date = privacies[i].split(" ")[0];
        type = privacies[i].split(" ")[1];
        
        year = parseInt(date.split(".")[0]);
        month = parseInt(date.split(".")[1]);
        day = parseInt(date.split(".")[2]);
        
        for(let j=0; j<terms.length; j++) {
            if(terms[j][0]===type) {
                expiration = parseInt(terms[j][1]);
                break;
            }
        }
        
        month += expiration;
        year += (month%12===0)? Math.floor(month/12)-1:Math.floor(month/12);
        month = month%12===0 ? 12 : month%12;
        
        if(month===1 && day===1) {
            year -= 1;
            month = 12;
            day = 28;
        } else if(day===1) {
            month -= 1;
            day = 28;
        } else {
            day -= 1;
        }
        
        console.log(`${year}.${month}.${day}`);
        
        if(today_year>year) {
            answer.push(i+1);
        } else if(today_year===year) {
            if(today_month>month) {
                answer.push(i+1);
            } else if(today_month===month) {
                if(today_day>day) {
                    answer.push(i+1);
                }
            }
        }
    }
    return answer;
}