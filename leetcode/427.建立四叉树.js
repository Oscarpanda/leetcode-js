/*
 * @lc app=leetcode.cn id=427 lang=javascript
 *
 * [427] 建立四叉树
 */
/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */
/**
 * @param {number[][]} grid
 * @return {Node}
 */
function add(a) {
  function sum(b) { // 使用闭包
    a = a + b; // 累加
    return sum;
  }
  sum.toString = function () { // 重写toString()方法
    return a;
  }
  return sum; // 返回一个函数
}
add(1)
console.log(add(1))
