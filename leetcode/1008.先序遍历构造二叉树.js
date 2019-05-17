/*
 * @lc app=leetcode.cn id=1008 lang=javascript
 *
 * [1008] 先序遍历构造二叉树
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }
var bstFromPreorder = function(preorder) {
  if (preorder.length === 0) return null
  let temp = preorder.shift();
  let left = [] 
  while(preorder && preorder[0] < temp ) {
     left.push(preorder.shift()) 
  }
  let right = preorder;
  let root = new TreeNode(temp)
  root.left = bstFromPreorder(left);
  root.right =  bstFromPreorder(right)
  return root
};
let a = bstFromPreorder([8,5,1,7,10,12])
console.log(a)
