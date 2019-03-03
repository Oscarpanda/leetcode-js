var searchRange = function(nums, target) {
    
    let digui = (nums, target,start, end) => {
        if (nums.length === 1) {
            if (target !== nums[0]) {
                return [-1,-1]
            } else {
                return [1,1]
            }
        }
       let mid = Math.floor((start+ end) / 2);
       if (start === end) {
           if (nums[start])
       }
       if (nums[mid] < target) {
           return digui(nums, target, mid+1, end)
       } else if (nums[mid] > target) {
           return digui(nums, target, start, mid-1)
       } else {
           let temp = mid;
           let result = [];
           while (temp >= 0 && nums[temp] === target) {
               temp--
           }
           temp++
           result.push(temp)
           let temp1 = mid;
           while (temp1 <= nums.length -1 && nums[temp1] === target) {
               temp1++
           }
           temp1--
           result.push(temp1)
           return result
       }
    }
    let re = digui(nums, target, 0, nums.length-1)
    console.log(re)

};
searchRange([1,4],4)