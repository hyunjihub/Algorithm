function solution(friends, gifts) {
    let gift_list = Array.from({length: friends.length}, ()=>new Array(friends.length).fill(0));
    let giver = '';
    let taker = '';
    let giver_index = 0;
    let taker_index = 0;
    for(let i=0; i<gifts.length; i++) {
        giver = gifts[i].split(" ")[0];
        taker = gifts[i].split(" ")[1];
        gift_list[friends.indexOf(giver)][friends.indexOf(taker)]++;
    }
      
    let score = Array.from({length: friends.length}, ()=>0);
    let give_n = 0;
    let take_n = 0;
    for(let i=0; i<gift_list.length; i++) {
        give_n = 0;
        take_n = 0;
        for(let j=0; j<gift_list[0].length; j++) {
            give_n += gift_list[i][j];
            take_n += gift_list[j][i];
        }
        score[i] = give_n - take_n;
    }
    
    let gift_n = Array.from({length: friends.length}, ()=>0);
    for(let i=0; i<gift_list.length; i++) {
        for(let j=0; j<gift_list[0].length; j++) {
            if(i===j | i>j) continue;
            if(gift_list[i][j]<gift_list[j][i]) gift_n[j]++;
            else if(gift_list[i][j]>gift_list[j][i]) gift_n[i]++;
            else {
                if(score[i]>score[j]) gift_n[i]++;
                else if(score[i]<score[j]) gift_n[j]++;
            }
        }
    }
    gift_n.sort((a,b)=>a-b);
    return gift_n[gift_n.length-1];
}