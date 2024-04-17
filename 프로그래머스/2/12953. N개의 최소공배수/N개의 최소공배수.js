function solution(arr) {
    var answer = 0;
    arr.sort((a,b)=>b-a);
    let n = arr[0];
    let add = n;
    while (true) {
      let can = true;
      for (let i = 1; i < arr.length; i++) {
        if (n % arr[i] !== 0) {
          can = false;
          break;
        }
      }

      if (can) {
        break;
      }
      n += add;
    }
    return n;
}