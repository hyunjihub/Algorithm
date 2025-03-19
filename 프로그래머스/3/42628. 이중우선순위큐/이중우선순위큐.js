function solution(operations) {
    var answer = [];
    
    class MinHeap {
        constructor() {
            this.heap = [null];
        }
        
        push(value) {
            this.heap.push(value);
            let current = this.heap.length-1;
            let parent = Math.floor(current/2);
            
            while(parent>0 && this.heap[current]<this.heap[parent]) {
                [this.heap[current], this.heap[parent]] = [this.heap[parent], this.heap[current]];
                current = parent;
                parent = Math.floor(current/2);
            }
        }
        
        deleteMin() {
            if(this.heap.length===1) return null;
            if(this.heap.length===2) return this.heap.pop();
            
            let result = this.heap[1];
            this.heap[1] = this.heap.pop();
            let current = 1;
            
            while(true) {
                let left = 2*current;
                let right = left+1;
                let smallest = current;
                
                if(left<this.heap.length && this.heap[left]<this.heap[smallest]) smallest = left;
                if(right<this.heap.length && this.heap[right]<this.heap[smallest]) smallest = right;
                if(current === smallest) break;
                
                [this.heap[current], this.heap[smallest]] = [this.heap[smallest], this.heap[current]];
                current = smallest;
            }
            return result;
        }
        
        deleteMax() {
            if(this.heap.length===1) return null;
            if(this.heap.length===2) return this.heap.pop();
            
            let lastParent = Math.floor((this.heap.length-1)/2);
            let left = this.heap.slice(lastParent);
            
            let max = 0;
            let maxIdx = 0;
            for(let i=0; i<left.length; i++) {
                if(left[i]>max) {
                    max = left[i];
                    maxIdx = i;
                }
            }
            
            maxIdx += lastParent;
            this.heap.splice(maxIdx, 1);
        }
        
        getResult() {
            if(this.heap.length===1) return [0, 0];
            
            let min = this.heap[1];
            let max = 0;
            
            let lastParent = Math.floor((this.heap.length-1)/2);
            let left = this.heap.slice(lastParent);
            max = Math.max(...left);
            
            return [max, min];
        }
    }
    
    let pq = new MinHeap();
    for(let i=0; i<operations.length; i++) {
        let [command, value] = operations[i].split(" ");
        value = Number(value);
        
        if(command==="I") {
            pq.push(value);
        } else {
            if(value===1) {
                pq.deleteMax();
            } else {
                pq.deleteMin();
            }
        }
    }
    
    
    return pq.getResult();
}