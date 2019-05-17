/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为K的子数组
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let len = nums.length;
  let result = [];
  for (let i = 0; i <  len ; i++ ) {
    let sum = 0
    for (let j = i; j < len; j++) {
      sum += nums[j];
      if (sum === k) {
        result.push([i, j]);
      }
    }
  }
  return result.length
    
  // let start = 0;
  // let end = 0;
  // let sum = nums[start];
  // let result = [];
  // while (end <= nums.length - 1 && end >= start) {
  //   if (sum > k) {
  //     sum -= nums[start]
  //     start += 1;
  //     if (start > end) {
  //       end = start;
  //       sum = nums[end]
  //     }
  //   }  else if (sum < k && end < nums.length - 1)  {
  //     sum += nums[end + 1]
  //     end += 1
  //   } else if (end === nums.length - 1) {
  //     if (sum === k) {
  //       result.push([start, end])
  //       sum -= nums[start]
  //       start += 1;
  //     } else {
  //       sum -= nums[start]
  //       start += 1;
  //     }
  //   } else if (sum === k ){
  //     result.push([start, end])
  //     sum -= nums[start]
  //     start += 1;
  //     if (start > end) {
  //       end = start
  //       sum = nums[end]
  //     }

  //   }

  // }
  // return result.length
};

// subarraySum([28,54,7,-70,22,65,-6], 100)
