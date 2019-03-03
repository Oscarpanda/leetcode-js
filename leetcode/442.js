var findDuplicates = function(nums) {
    
    let result = []
    for (let i = 0;i<nums.length;i++) {         

        if (nums[Math.abs(nums[i]) - 1] < 0) {
            result.push(Math.abs(nums[i] ))

        }
        else {
            nums[Math.abs(nums[i]) - 1] = - nums[Math.abs(nums[i]) - 1] 

        }
    }
    console.log(nums, result)
};
findDuplicates([4,3,2,7,8,2,3,1])