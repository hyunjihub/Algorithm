function solution(id_list, report, k) {
    var answer = Array.from({length: id_list.length}, ()=>0);
    let reporting_id = Array.from({length: id_list.length}, ()=>new Set());
    let reporting = '';
    let reported = '';
    let reported_index = 0;
    let reporting_index = 0;
    let count = Array.from({length: id_list.length}, ()=>0);
    for(let i=0; i<report.length; i++) {
        reporting = report[i].split(" ")[0];
        reported = report[i].split(" ")[1];
        for(let j=0; j<id_list.length; j++) {
            if(id_list[j]===reported) {
                reported_index = j;
            }
        }
        if(!reporting_id[reported_index].has(reporting)) {
            reporting_id[reported_index].add(reporting);
            count[reported_index]++;
        }
    }
    
    for(let i=0; i<count.length; i++) {
        if(count[i]>=k) {
            for(let k of reporting_id[i]) {
                for(let j=0; j<id_list.length; j++) {
                    if(k===id_list[j]) {
                        reporting_index = j;
                        break;
                    }
                }
                answer[reporting_index]++;
            }
        }
    }
    
    return answer;
}