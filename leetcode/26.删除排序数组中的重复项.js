/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
  let temp  = nums[0]
  let index = 1
  for (let i  = 1 ; i < nums.length; i++) {
    if (nums[i] === temp) {
    } else {
      nums[index] = nums[i];
      temp = nums[i]
      index ++
    }
  }
  return index
};
removeDuplicates([0,0,1,1,1,2,2,3,3,4])

