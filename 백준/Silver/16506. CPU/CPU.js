const fs = require('fs');
const [n, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let machine_code = '';
for (let i = 0; i < input.length; i++) {
  input[i] = input[i].trim().split(' ');
  machine_code += getOpcode(input[i][0]);
  if (getOpcode(input[i][0]).charAt(4) === '0') {
    machine_code += getBinary(parseInt(input[i][1]), 3);
    machine_code += getBinary(parseInt(input[i][2]), 3);
    machine_code += getBinary(parseInt(input[i][3]), 3);
    machine_code += '0';
  } else {
    machine_code += getBinary(parseInt(input[i][1]), 3);
    machine_code += getBinary(parseInt(input[i][2]), 3);
    machine_code += getBinary(parseInt(input[i][3]), 4);
  }
  if (i !== input.length - 1) {
    machine_code += '\n';
  }
}

console.log(machine_code);

function getOpcode(opcode) {
  let binary = '';

  if (opcode === 'ADD' || opcode === 'ADDC') {
    binary = '0000';
  } else if (opcode === 'SUB' || opcode === 'SUBC') {
    binary = '0001';
  } else if (opcode === 'MOV' || opcode === 'MOVC') {
    binary = '0010';
  } else if (opcode === 'AND' || opcode === 'ANDC') {
    binary = '0011';
  } else if (opcode === 'OR' || opcode === 'ORC') {
    binary = '0100';
  } else if (opcode === 'NOT') {
    binary = '0101';
  } else if (opcode === 'MULT' || opcode === 'MULTC') {
    binary = '0110';
  } else if (opcode === 'LSFTL' || opcode === 'LSFTLC') {
    binary = '0111';
  } else if (opcode === 'LSFTR' || opcode === 'LSFTRC') {
    binary = '1000';
  } else if (opcode === 'ASFTR' || opcode === 'ASFTRC') {
    binary = '1001';
  } else if (opcode === 'RL' || opcode === 'RLC') {
    binary = '1010';
  } else if (opcode === 'RR' || opcode === 'RRC') {
    binary = '1011';
  }

  if (opcode.charAt(opcode.length - 1) === 'C') {
    binary += 1;
  } else {
    binary += 0;
  }
  return binary + '0';
}

function getBinary(num, size) {
  let binary = '';

  while (true) {
    if (num === 0) break;
    binary = (num % 2) + binary;
    num = Math.floor(num / 2);
  }

  while (true) {
    if (binary.length === size) break;
    binary = '0' + binary;
  }

  return binary;
}
