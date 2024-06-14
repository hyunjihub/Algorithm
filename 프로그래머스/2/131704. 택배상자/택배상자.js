function solution(order) {
    let addContainer = [];
    let container = [];
    let box = 1;
    
    for (let i = 0; i < order.length; i++) {
        while (box <= order[i]) {
            if (box === order[i]) {
                container.push(order[i]);
                box++;
                break;
            } else {
                addContainer.push(box++);
            }
        }
        while (addContainer.length > 0 && addContainer[addContainer.length - 1] === order[i]) {
            container.push(addContainer.pop());
        }
        if (container.length < i + 1) {
            break;
        }
    }
    
    return container.length;
}
