/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let digui = (nums, target, start, end) => {
        if (end < start) return start
        if (start === end) {
            if(nums[start] < target) return start + 1
            
            if(nums[start] > target) return start 
            return start
        } 
        let mid = Math.floor((start+end) / 2);
        if (nums[mid] < target) {
            if (mid + 1 <= nums.length - 1 && nums[mid +1] > target) {
                return mid +1
            }
            return digui(nums, target, mid+1,end)
        } else if (nums[mid] > target) {
            if (mid - 1 >=0 && nums[mid-1] < target) {
                return mid
            }
            return digui(nums, target, start, mid - 1)
        } else {
            return mid
        }
    }
    let re = digui(nums, target, 0 ,nums.length -1)
    console.log(re)
    return re
};
searchInsert([1, 3] ,0)