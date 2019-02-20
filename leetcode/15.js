/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let result = [];
  nums = nums.sort((a, b) => {
      return a - b
  })
  let add = (result, arr) => {
      for (let i = 0;i<result.length;i ++) {
          if (result[i].sort((a,b) => a - b).join("") === arr.sort((a,b) => a-b).join("")) {
              return false
          }
          return true
      }
  }
  for(let i = 0;i<nums.length -2;i++) {
      let j = i +1
      let z = nums.length -1 
      let sum = -nums[i]
      while(j < z) {
          if (nums[j] + nums[z] === sum) {
              if (add(result,[nums[i], nums[j], nums[z]] )) {
                  result.push([nums[i], nums[j], nums[z]])
              }
              break;
          }else if (nums[j] + nums[z] < sum) {
              j++
          } else {
              z--
          }
      }
  }
  return result
  console.log(result)
  
};
threeSum([-1, 0, 1, 2, -1, -4]);