var missingNumber = function(nums) {
  for (let i=0;i<nums.length;i++) {
    
      
      nums[Math.abs(nums[i])] = -Math.abs(nums[i]) 
    console.log(nums)
  }
};
missingNumber([5,4,2])