/*
 * @lc app=leetcode.cn id=532 lang=javascript
 *
 * [532] 数组中的K-diff数对
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    if (k<0) return 0
    let map = new Map();
    nums.sort((a,b) => a-b);
    for (let i =0; i<nums.length; i++) {
        if (map.get(nums[i])) {
            // todo
        } else {
            if(k ===0) {
                if (i+1 <= nums.length - 1 && nums.indexOf(nums[i] + k) !== nums.lastIndexOf(nums[i])) { 
                    map.set(nums[i], 1)
                }
            } else if (i+1 <= nums.length - 1 && nums.indexOf(nums[i] + k) !==  -1) {
                map.set(nums[i], 1)
            }
        }
    }
    return map.size
};

findPairs([3,1,4,1,5], 0)
