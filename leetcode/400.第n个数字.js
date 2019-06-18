/*
 * @lc app=leetcode.cn id=400 lang=javascript
 *
 * [400] 第N个数字
 */
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    
  let z = 1;
  let pow = 0;
  let left =  n 
  while (left  - z * 9* Math.pow(10, pow) > 0)  {
    left  = left - z * 9* Math.pow(10, pow)
    z +=1;
    pow += 1;
  }
  let result
  if (left / z % 1 === 0) {
    result = Math.pow(10, pow) + Math.floor(left / z) -1;
  } else {
    result = Math.pow(10, pow) + Math.floor(left / z);
  }
  if (left % z === 0 ) {
    return result.toString()[z-1]
  } else {
    return result.toString()[left % z -1 ]
  }
};
console.log(findNthDigit(3))


