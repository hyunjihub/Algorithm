const [S, N, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let l_stack = [...S];
let r_stack = [];

for (let i = 0; i < N; i++) {
  const [command, value] = input[i].split(" ");
  if (command === "L" && l_stack.length) r_stack.push(l_stack.pop());
  else if (command === "D" && r_stack.length) l_stack.push(r_stack.pop());
  else if (command === "B" && l_stack.length) l_stack.pop();
  else if (command === "P") l_stack.push(value);
}

const answer = l_stack.concat(r_stack.reverse()).join("");
console.log(answer);