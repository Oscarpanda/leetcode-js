var singleNonDuplicate = function(nums) {
    
  while(nums.length >= 3) {
      let mid = nums[(nums.length - 1) / 2];
      if (nums.length % 4 === 3) {
          if (mid === nums[(nums.length - 1) / 2 +1]) {
              nums = nums.slice(0, (nums.length - 1) /2)
          } else if (mid === nums[(nums.length - 1) / 2 -1]) {
              nums = nums.slice( (nums.length - 1) /2  + 1), nums.length;
          } else {
            return mid;
          }

      } else {
          if (mid === nums[(nums.length - 1) / 2 +1]) {
              nums = nums.slice( (nums.length - 1) /2) , nums.length;
          } else if (mid === nums[(nums.length - 1) / 2 - 1]) {
              nums = nums.slice(0, (nums.length - 1) /2 + 1)
          } else {
            return mid
          }
      } 

  }
  return nums
};
let a = singleNonDuplicate([1,1,3,3,4,4,7])
console.log(a)