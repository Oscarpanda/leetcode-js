/*
 * @lc app=leetcode.cn id=454 lang=javascript
 *
 * [454] 四数相加 II
 */
/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
  let result = 0;
  let setAB = new Map();
  for (let a of A) {
    for (let b of B)
    if (setAB.has(a+b)) {
      setAB.set(a+b, setAB.get(a+b) + 1)
    } else{
      setAB.set(a+b, 1)
    }
  }
  for (let c of C) {
    for (d of D) {
      if (setAB.has(0-c-d)) {
        result += setAB.get(0-c-d)
      }
    }
  }
  return result;
};
fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2])

