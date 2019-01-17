var subsets = function(nums) {
    
  let result = [[]]
  nums.forEach((item) => {
     result.forEach((i) => {
         if (i.indexOf(item) === -1) {
             
             i.push(item)
             result.push(nes)
             console.log(result, item, i)
         }
     }) 
               
  })
  return result
};
subsets([1,2,3])