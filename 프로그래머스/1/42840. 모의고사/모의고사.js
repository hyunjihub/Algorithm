function solution(answers) {
    var answer = [];
    let a = 0;
    let b = 0;
    let c = 0;
    let a_solved = [1, 2, 3, 4, 5];
    let b_solved = [2, 1, 2, 3, 2, 4, 2, 5];
    let c_solved = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let tmp = 0;
    for(let i=0; i<answers.length; i++) {
        if(a_solved[0]===answers[i]) {
            a++;
        }
        if(b_solved[0]===answers[i]) {
            b++;
        }
        if(c_solved[0]===answers[i]) {
            c++;
        }
        tmp = a_solved[0];
        a_solved = a_solved.splice(1);
        a_solved.push(tmp);
        tmp = b_solved[0];
        b_solved = b_solved.splice(1);
        b_solved.push(tmp);
        tmp = c_solved[0];
        c_solved = c_solved.splice(1);
        c_solved.push(tmp);
    }
    let result = [a, b, c];
    let max = 0;
    for(let i=0; i<3; i++) {
        if(max<result[i]) max = result[i];
    }
    for(let i=0; i<3; i++) {
        if(max===result[i]) {
            answer.push(i+1);
        }
    }
    return answer.sort((a,b)=>a-b);
}
