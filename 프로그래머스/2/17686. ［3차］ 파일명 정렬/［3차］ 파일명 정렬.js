function solution(files) {
    var answer = [];
    let file = Array.from({length: files.length});
    for(let i=0; i<files.length; i++) {
        let head = files[i].charAt(0).toLowerCase();
        let index = 0;
        while(true) {
            if(index===files[i].length) break;
            if(index+1!==files[i].length && isNaN(Number(files[i].charAt(index+1)))) {
                head += files[i].charAt(index+1).toLowerCase();
                index++;
            } else {
                if(files[i].charAt(index+1)===" ") {
                    head += files[i].charAt(index+1).toLowerCase();
                    index++;
                } else break;
            }
        }
        let number = files[i].charAt(++index);
        while(true) {
            if(index===files[i].length) break;
            if(index+1!==files[i].length && !isNaN(Number(files[i].charAt(index+1)))) {
                if(files[i].charAt(index+1)===" ") break;
                number += files[i].charAt(index+1);
                index++;
            } else {
                break;
            }
        }
        let tail = index===files[i].length?"":files[i].substring(index+1);
        file[i] = [head, Number(number), tail, i];
    }
    console.log(file);
    file.sort((a, b)=>{
        let headComparison = a[0].localeCompare(b[0]);
        if (headComparison !== 0) {
            return headComparison;
        } else {
            if (a[1] < b[1]) return -1;
            else if (a[1] > b[1]) return 1;
            else {
                return a[3] - b[3];
            }
        }
    });
    
    for(let i=0; i<file.length; i++) {
        answer.push(files[file[i][3]]);
    }
    return answer;
}