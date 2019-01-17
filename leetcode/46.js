/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let result = [[]];
  let temparr = [[]]
  for (let i = 0; i<nums.length;i++) {
      result = temparr
      temparr = []
      result.forEach((item, index) => {

          console.log(item)
          if (item.indexOf(nums[i]) === -1) {
            if(item.length === 0) {
              temparr.push([nums[i]])
            } else {
              let copy
              for(let j = 0;j<=item.length -1;j++) {
                  copy = item.slice(0)
                  console.log('d')
                   copy.splice(j,0,nums[i])
                  temparr.push(copy)
              }
              copy = item.slice(0)
              copy.push(nums[i])
              temparr.push(copy)

            }
          }
      })
      reuslt = []
      
  }
  console.log(result, temparr)
 
};
permute([1,2,3])