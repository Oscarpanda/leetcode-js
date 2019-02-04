/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    
    numscopy = nums.concat(nums)
    numsMap = numscopy.map((item,index) => {
        let obj = {}
        obj.index=index
        obj.value= item
        return  obj
    })
    let stack = [];
    let hash = {}
    let i = 0;
    while(i < numsMap.length ) {
        if (stack.length === 0 || stack[stack.length - 1].value >= numsMap[i].value) {
            stack.push(numsMap[i]);
            i++
        }else {
            hash[stack[stack.length - 1].index] = numsMap[i].value
            stack.pop();
        }
        
    }
    let result = [];
    for (let i = 0;i<nums.length;i++) {
        if(hash[i]) {
            result.push(hash[i])
        } else {
            result.push(-1)
        }

    }
    console.log(hash,result)
    
};
nextGreaterElements([-1,0])