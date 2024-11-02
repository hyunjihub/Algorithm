const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);

let [Ax, Ay, Bx, By, Cx, Cy] = input;

if ((Ax === Bx && Ay === By) || (Ax === Cx && Ay === Cy) || (Bx === Cx && By === Cy)) {
  console.log(-1);
} else if ((Bx - Ax) * (Cy - Ay) === (By - Ay) * (Cx - Ax)) {
  console.log(-1);
} else {
  let AB = Math.sqrt((Bx - Ax) ** 2 + (By - Ay) ** 2);
  let AC = Math.sqrt((Cx - Ax) ** 2 + (Cy - Ay) ** 2);
  let BC = Math.sqrt((Cx - Bx) ** 2 + (Cy - By) ** 2);

  let maxLength = Math.max(AB, AC, BC);
  let minLength = Math.min(AB, AC, BC);

  console.log(2 * maxLength - 2 * minLength);
}
