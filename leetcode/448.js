var findDisappearedNumbers = function(nums) {
    
  let result = [];
  for(let i =0;i<nums.length;i++) {
    if (nums[Math.abs(nums[i]) - 1] >0) {
      nums[Math.abs(nums[i]) - 1] = -nums[Math.abs(nums[i]) - 1]
    }
  }
  for(let i =0;i<nums.length;i++) {
    if (nums[i] > 0 ) {
      result.push(i + 1);
    }
  }

  return result
};
findDisappearedNumbers([4,3,2,7,8,2,3,1]);