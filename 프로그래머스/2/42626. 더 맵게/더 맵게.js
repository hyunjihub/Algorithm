function solution(scoville, K) {
    var answer = 0;
    let heap = new MinHeap();
    for(let i=0; i<scoville.length; i++) {
        heap.add(scoville[i]);
    }

    while(true) {
        let result = heap.mix(K);
        if(result===-1) {
            if(heap.get()[0]>=K) break;
            else {
                answer = -1;
                break;
            }
        } else if(result===0) {
            break;
        }
        answer++;
    }
    return answer;
}

class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    add(value) {
        this.heap.push(value);
        let current = this.heap.length-1;
        let parent = Math.floor((current-1)/2);
        while(current>0 && this.heap[parent]>this.heap[current]) {
            [this.heap[parent], this.heap[current]] = [this.heap[current], this.heap[parent]];
            current = parent;
            parent = Math.floor((current-1)/2);
        }
    }
    
    remove() {
        if(this.heap.length===1) return this.heap.pop();
        let value = this.heap[0];
        this.heap[0] = this.heap.pop();
        let current = 0;
        let left = current*2+1;
        let right = current*2+2;
        while((this.heap[left] && this.heap[left]<this.heap[current]) || (this.heap[right] && this.heap[right]<this.heap[current])) {
            if (right >= this.heap.length || this.heap[left] < this.heap[right]) {
                [this.heap[left], this.heap[current]] = [this.heap[current], this.heap[left]];
                current = left;
            } else {
                [this.heap[right], this.heap[current]] = [this.heap[current], this.heap[right]];
                current = right;
            }
            left = current*2+1;
            right = current*2+2;
        }
        return value;
    }
    
    mix(value) {
        if(this.heap.length<2) return -1;
        else if(this.heap[0]>=value) return 0;
        else {
            let min1 = this.remove();
            let min2 = this.remove();
            this.add(min1+(min2*2));
        }
        return 1;
    }
    
    get() {
        return this.heap;
    }
}