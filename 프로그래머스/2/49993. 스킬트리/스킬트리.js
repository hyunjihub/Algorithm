function solution(skill, skill_trees) {
    var answer = 0;
    let order = Array.from({length: skill.length}, ()=>99);
    let isPossible = true;
    for(let i=0; i<skill_trees.length; i++) {
        order.fill(99);
        isPossible = true;
        for(let j=0; j<skill.length; j++) {
            order[j] = skill_trees[i].indexOf(skill.charAt(j));
            if(j!==0 && order[j-1]>order[j]) {
                if(order[j]!==-1) {
                    isPossible = false;
                    break;
                }
            } else {
                if(order[j]!==-1 && order[j-1]===-1) {
                    isPossible = false;
                    break;
                }
            }
        }
        if(isPossible) answer++;
    }
    return answer;
}