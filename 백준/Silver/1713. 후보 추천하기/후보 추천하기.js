const fs = require('fs');
let [N, recommendCount, recommend] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);
recommendCount = Number(recommendCount);
recommend = recommend.trim().split(' ').map(Number);
let photo = new Map();

function getDelete() {
  let deleteStudent = 0;
  let min = Infinity;
  for (let [student, count] of photo) {
    if (min > count) {
      deleteStudent = student;
      min = count;
    }
  }
  photo.delete(deleteStudent);
}

for (let i = 0; i < recommendCount; i++) {
  if (photo.size < N) {
    if (photo.has(recommend[i])) {
      photo.set(recommend[i], photo.get(recommend[i]) + 1);
    } else {
      photo.set(recommend[i], 1);
    }
  } else {
    if (photo.has(recommend[i])) {
      photo.set(recommend[i], photo.get(recommend[i]) + 1);
    } else {
      getDelete();
      photo.set(recommend[i], 1);
    }
  }
}

let student = Array.from(photo.keys());
student.sort((a, b) => a - b);
console.log(student.join(' '));
