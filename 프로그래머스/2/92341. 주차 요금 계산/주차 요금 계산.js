function solution(fees, records) {
    var answer = [];
    
    let parking = new Map();
    let fee = new Map();
    for(let i=0; i<records.length; i++) {
        let info = records[i].split(" ");
        info[0] = info[0].split(":").map(Number);
        info[0] = info[0][0]*60+info[0][1];
        if(info[2]==="IN") {
            parking.set(info[1], info[0]);
        } else {
            if(fee.has(info[1])) {
                fee.set(info[1], fee.get(info[1])+info[0]-parking.get(info[1]));
            } else {
                fee.set(info[1], info[0]-parking.get(info[1]));
            }
            parking.delete(info[1]);
        }
    }
    let last = 23*60+59;
    parking.forEach((value, key)=>{
        if(fee.has(key)) {
                fee.set(key, fee.get(key)+last-value);
            } else {
                fee.set(key, last-value);
            }
            parking.delete(key);
    });
    
    let car = Array.from(fee);
    car.sort((a, b)=>Number(a[0])-Number(b[0]));
    
    let result = 0;
    for(let i=0; i<car.length; i++) {
        if(car[i][1]>fees[0]) {
            result = fees[1]+Math.ceil((car[i][1]-fees[0])/fees[2])*fees[3];
        } else {
            result = fees[1];
        }
        answer.push(result);
    }
    return answer;
}