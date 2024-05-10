function solution(priorities, location) {
    class Queue {
        constructor() {
            this.storage = {}, this.front = 0; this.rear = 0;
        }
        
        size() {
            if(this.storage[this.rear]===undefined) return 0;
            else this.rear - this.front + 1;
        }
        
        enqueue(value) {
            if(this.size()===0) this.storage[0] = value;
            else {
                this.rear++;
                this.storage[this.rear] = value;
            }
        }
        
        dequeue() {
            let value = this.storage[this.front];
            delete this.storage[this.front];
            if(this.front===this.rear) {
                this.front = 0;
                this.rear = 0;
            }
            else this.front++;
            return value;
        }
    }
    
    let queue = new Queue();
    for(let i=0; i<priorities.length; i++) {
        if(i===location) {
            queue.enqueue(10+priorities[i]);
        } else queue.enqueue(priorities[i]);
    }
    priorities.sort((a,b)=>b-a);
    
    let index = 0;
    while(queue.size()!==0) {
        let remove = queue.dequeue();
        if(remove%10!==priorities[index]) {
            queue.enqueue(remove);
        } else {
            if(remove>10) break;
            index++;
        }
    }

    return index+1;
}