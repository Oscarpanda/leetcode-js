var longestConsecutive = function(nums) {
  let map = new Map();
  let max = 1;
  for (let i = 0;i< nums.length;i++) {
      if (!map.has(nums[i])) {
          let len = 1;
          if (map.has(nums[i]-1) && ! map.has(nums[i] + 1)) {
              let left = map.get(nums[i]-1) 
              len += left;
              map.set(nums[i], len)
              for (let j = 1;j<=left;j++) {
                  map.set(nums[i] - j, len)
              }
          } else if (!map.has(nums[i]-1) &&  map.has(nums[i] + 1)) {
              let right = map.get(nums[i]+1) 
              len += right;
              map.set(nums[i], len)
              for (let j = 1;j<=right;j++) {
                  map.set(nums[i] +j, len)
              }
          } else if (map.has(nums[i]-1) &&  map.has(nums[i] + 1)) {
              let right = map.get(nums[i]+1) 
              let left = map.get(nums[i]-1) 
              len = 1+  right + left ;
              map.set(nums[i], len)
              for (let j = 1;j<=right;j++) {
                  map.set(nums[i] +j,  len)
              }
              for (let j = 1;j<=left;j++) {
                  map.set(nums[i] - j, len)
              }
          } else if (!map.has(nums[i]-1) &&  !map.has(nums[i] + 1)) {
              map.set(nums[i], len)
          } 
          if (len > max) {
              max = len
          }
      }
  }
  return max
  
};
longestConsecutive( [100, 4, 200, 1, 3, 2])