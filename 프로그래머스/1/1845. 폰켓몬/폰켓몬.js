function solution(nums) {
    var answer = 0;
    let n = nums.length/2;
    nums = new Set(nums);
    answer = nums.size<n ? nums.size : n;
    return answer;
}