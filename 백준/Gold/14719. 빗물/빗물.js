const fs = require('fs');
let [n, height] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [H, W] = n.split(' ').map(Number);
height = height.split(' ').map(Number);

let left = 0,
  right = W - 1;
let leftMax = height[left],
  rightMax = height[right];
let totalWater = 0;

while (left < right) {
  if (leftMax < rightMax) {
    left++;
    leftMax = Math.max(leftMax, height[left]);
    totalWater += Math.max(0, leftMax - height[left]);
  } else {
    right--;
    rightMax = Math.max(rightMax, height[right]);
    totalWater += Math.max(0, rightMax - height[right]);
  }
}

console.log(totalWater);
