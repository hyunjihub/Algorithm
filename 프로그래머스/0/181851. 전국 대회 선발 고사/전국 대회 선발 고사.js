function solution(rank, attendance) {
    var answer = 0;
    let count = 0;
    let student = [];
    let ranking = 1;
    while(true) {
        if(count===3) break;
        for(let i=0; i<rank.length; i++) {
            if(ranking===rank[i] && attendance[i]) {
                student.push(i);
                count++;
            }
        }
        ranking++;
    }
    answer = 10000*student[0] + 100*student[1] + student[2];
    return answer;
}