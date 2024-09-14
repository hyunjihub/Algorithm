function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    let bridge = Array.from({length: bridge_length}, ()=>0);
    let currentWeight = 0;
    let truckIndex = 0;
    
    while(truckIndex < truck_weights.length || currentWeight > 0) {
        time++;
        currentWeight -= bridge.shift();
        
        if(truckIndex < truck_weights.length) {
            if(currentWeight+truck_weights[truckIndex] <= weight) {
                bridge.push(truck_weights[truckIndex]);
                currentWeight += truck_weights[truckIndex++];
            } else {
                bridge.push(0);
            }
        }
    }
    
    return time;
}