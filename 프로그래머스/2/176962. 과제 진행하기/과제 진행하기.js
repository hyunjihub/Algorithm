function solution(plans) {
    var answer = [];
    
    class MinHeap {
        constructor() {
            this.heap = [null];
        }
        
        enqueue(value) {
            this.heap.push(value);
            let current = this.heap.length - 1;
            let parent = Math.floor(current / 2);
            
            while (parent > 0 && this.heap[current][1] < this.heap[parent][1]) {
                [this.heap[current], this.heap[parent]] = [this.heap[parent], this.heap[current]];
                current = parent;
                parent = Math.floor(current / 2);
            }
        }
        
        dequeue() {
            if (this.heap.length === 1) return null;
            if (this.heap.length === 2) return this.heap.pop();
            
            let result = this.heap[1];
            this.heap[1] = this.heap.pop();
            let current = 1;
            
            while (true) {
                let smallest = current;
                let left = 2 * current;
                let right = left + 1;
                
                if (left < this.heap.length && this.heap[left][1] < this.heap[smallest][1]) {
                    smallest = left;
                }
                if (right < this.heap.length && this.heap[right][1] < this.heap[smallest][1]) {
                    smallest = right;
                }
                
                if (smallest === current) break;
                [this.heap[current], this.heap[smallest]] = [this.heap[smallest], this.heap[current]];
                current = smallest;
            }
            return result;
        }
        
        peek() {
            if (this.heap.length === 1) return null;
            return this.heap[1];
        }
        
        getSize() {
            return this.heap.length - 1;
        }
    }
    
    let timePlan = new MinHeap();
    for (let i = 0; i < plans.length; i++) {
        let [name, start, playtime] = plans[i];
        start = start.split(":").map(Number);
        start = start[0] * 60 + start[1];
        timePlan.enqueue([name, start, Number(playtime)]);
    }

    let currentTime = timePlan.peek()[1];
    let current = null;
    let ready = [];
    
    while (timePlan.getSize()) {
        if (!current && ready.length > 0) {
            current = ready.pop();
        }
        
        if (!current && currentTime < timePlan.peek()[1]) {
            currentTime = timePlan.peek()[1];
        }
        
        if (current) {
            current[2]--;
            if (current[2] === 0) {
                answer.push(current[0]);
                current = null;
            }
        }
        
        while (timePlan.getSize() && currentTime === timePlan.peek()[1]) {
            if (current && current[2] > 0) {
                ready.push(current);
            }
            current = timePlan.dequeue();
        }
        currentTime++;
    }
    
    if (current) answer.push(current[0]);
    while (ready.length > 0) {
        answer.push(ready.pop()[0]);
    }
    return answer;
}
