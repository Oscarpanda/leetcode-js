/*
 * @lc app=leetcode.cn id=173 lang=javascript
 *
 * [173] 二叉搜索树迭代器
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
   this.root = root
   this.toArrayFromRoot()
};

/**
 * @return the next smallest number
 * @return {number}
 */


BSTIterator.prototype.toArrayFromRoot = function() {
  let arr = [];
  let digui = (root) => {
    if (root === null) return null
    digui(root.left);
    arr.push(root.val);
    digui(root.right);
  }
  digui(this.root)
  this.rootArray = arr;



};
BSTIterator.prototype.next = function() {
  return this.rootArray.shift()

};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return this.rootArray.length > 0

};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

