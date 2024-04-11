function solution(bandage, health, attacks) {
    var answer = 0;
    let time_index = 0;
    let heal = 0;
    let max_health = health;
    for(let time=0; ; time++) {
        if(time_index===attacks.length) break;
        if(attacks[time_index][0]===time) {
            heal = 0;
            health -= attacks[time_index][1];
            if(health<=0) {
                health = -1;
                break;
            }
            time_index++;
        } else {
            heal++;
            health += bandage[1];
            if(heal===bandage[0]) {
                health += bandage[2];
                heal = 0;
            }
            if(health>max_health) {
                health = max_health;
            }
        }
        console.log(health);
    }
    return health;
}