function solution(data, col, row_begin, row_end) {
    data.sort((a, b)=>{
        if(a[col-1]===b[col-1]) {
            return b[0]-a[0];
        } else {
            return a[col-1]-b[col-1];
        }
    })
    
    let result = 0;
    for(let i=row_begin-1; i<row_end; i++) {
        let S = 0;
        for(let j=0; j<data[0].length; j++) {
            S += data[i][j]%(i+1);
        }
        if(i===row_begin-1) {
            result = S;
        } else {
            result = result ^ S;
        }
    }
    
    return result;
}