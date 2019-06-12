/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let map = new Map();
  let temp = n
  while (temp!==1) {
    if (map.get(temp) === 1) {
      return false
    }
    map.set(temp, 1)
    let arr = temp.toString().split('');
    arrInt = arr.map((item) => parseInt(item))
    let sum = 0;
    for (let j = 0; j < arrInt.length; j++) {
      sum+= arrInt[j] * arrInt[j];
    }
    temp = sum;
  }
  return true
    

};
isHappy(19)

