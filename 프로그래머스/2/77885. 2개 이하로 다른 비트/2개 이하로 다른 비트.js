function solution(numbers) {
    var answer = [];
    
    for(let i=0; i<numbers.length; i++) {
        let bit = numbers[i].toString(2);
        bit = bit.padStart(50, '0');
        answer.push(getNumber(numbers[i], bit));
    }
    
    return answer;
}

function getNumber(number, bit) {
    if (number % 2 === 0) {
        return number + 1;
    }
    
    let checkBit = number.toString(2);
    if (!checkBit.includes('0')) {
        return parseInt('10' + checkBit.slice(1), 2);
    }
    
    let lastZeroIndex = checkBit.lastIndexOf('0');
    let nextBit = checkBit.slice(0, lastZeroIndex) + '10' + checkBit.slice(lastZeroIndex + 2);
    return parseInt(nextBit, 2);
}