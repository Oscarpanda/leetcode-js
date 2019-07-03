/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  if (num === 1) return true
  let last = Math.floor(num / 2);
  while(1) {
    if (last * last === num) {
      return true
    } else if (last*last < num && (last+1) ** 2 > num) {
      return false
    }
    else if (last * last > num) {
      last = Math.floor(last / 2);
    } else if (last ** 2 < num) {
      last +=1
    }
  }
    
  
  
};
isPerfectSquare(14)

