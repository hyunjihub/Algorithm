function solution(cap, n, deliveries, pickups) {
    let answer = 0;
    let dCap = 0, pCap = 0;
    let dIdx = n - 1, pIdx = n - 1;
    
    while (dIdx >= 0 || pIdx >= 0) {
        // 가장 먼 배달/수거 위치 찾기
        while (dIdx >= 0 && deliveries[dIdx] === 0) dIdx--;
        while (pIdx >= 0 && pickups[pIdx] === 0) pIdx--;
        
        // 현재 왕복 거리
        let maxDist = Math.max(dIdx, pIdx) + 1;
        answer += maxDist * 2;
        
        // 배달 및 수거 처리
        let dLoad = 0, pLoad = 0;
        
        while (dIdx >= 0 && dLoad < cap) {
            let deliver = Math.min(deliveries[dIdx], cap - dLoad);
            deliveries[dIdx] -= deliver;
            dLoad += deliver;
            if (deliveries[dIdx] === 0) dIdx--;
        }
        
        while (pIdx >= 0 && pLoad < cap) {
            let pick = Math.min(pickups[pIdx], cap - pLoad);
            pickups[pIdx] -= pick;
            pLoad += pick;
            if (pickups[pIdx] === 0) pIdx--;
        }
    }
    
    return answer;
}
