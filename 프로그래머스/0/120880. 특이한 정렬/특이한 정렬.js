function solution(numlist, n) {
    var answer = [];
    numlist.sort((a,b)=>{
        if(Math.abs(n-a)-Math.abs(n-b)===0) {
            return b-a;
        } else {
            return Math.abs(n-a)-Math.abs(n-b);
        }
    });
    return numlist;
}