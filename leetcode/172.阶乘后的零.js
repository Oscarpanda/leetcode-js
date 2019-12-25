/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 */
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  let z10 = Math.floor(n / 10);
  let z5 = Math.floor(n % 10 / 5)
  return z10 * 2 + z5
};
trailingZeroes(30)

