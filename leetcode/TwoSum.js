function twoSum3(arr, target) {
    let finalresult = [];
    for (let i = 1; i < arr.length; i++) {
        let num1 = arr[i];
        for (let j = i; j < arr.length; j++){
            let num2 = arr[j];
            let result = [];
            if (num2 + num1 === target) {
               result.push(i);
               result.push(j);
            }
        finalresult.push(result);
        }
    }
    return finalresult;
} 
var twoSum1 = function(nums, target) {
    var obj = {};
 
   for(var i=0; i< nums.length;i++) {
     const item = nums[i];
     if(obj[item] >= 0) {
       return [obj[item], i]
     } else {
       obj[target - item] = i;
     }
   }
 };
var twoSum = function(nums, target) {
    const record = new Map();
    for (let i = 0;i< nums.length;i++) {
        let temp = target - nums[i];
         if (record.has(temp)) {
            if (record.get(temp) !== i) {
                return [record.get(temp), i]
            }
            
        }
        record.set(nums[i], i)
    }
   
};
let a = twoSum([3,3],6) 

console.log(a)
