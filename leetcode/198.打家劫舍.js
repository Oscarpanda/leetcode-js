/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length === 0) return 0

  let dp  =[];
  for (let i = 0; i< nums.length; i++){
    if (i-2 >=0 ) {
      dp[i] = Math.max(dp[i-2] + nums[i],  dp[i-1]);
    } else if (i===0) {
      dp[i] = nums[0];
    } else if (i===1) {
      dp[i] = Math.max(nums[1], nums[0]);
    }

  }
  return dp[dp.length - 1];
    

};

