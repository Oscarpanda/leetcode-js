/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let result = [];
    
  for (let i = 0; i<nums1.length; i++) {
    for (let j = 0; j<nums2.length;j++) {
      if (nums1[i] === nums2[j]) {
        result.push(nums1[i]);
        nums2.splice(j, 1);
        nums1.splice(i, 1);
        i--
        break;
      }
    }
  }
  return result;
};

