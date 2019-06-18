/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  let first = -10000000000;
  let second = -10000000000
  let result= -10000000000
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === first || nums[i] === second || nums[i] === result) continue;
    if (nums[i] > first) {
      result = second;
      second = first;
      first = nums[i];
    } else if (nums[i] > second && nums[i] < first) {
      result = second;
      second = nums[i];
    } else if (nums[i] > result && nums[i] < second) {
      result = nums[i];
    }
  }
  if (result === -10000000000) return first;
  return result
    
};
thirdMax([1,2]);


