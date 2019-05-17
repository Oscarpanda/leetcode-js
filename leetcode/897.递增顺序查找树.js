/*
 * @lc app=leetcode.cn id=897 lang=javascript
 *
 * [897] 递增顺序查找树
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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
  let result = new TreeNode()
  let temp = result
  let middigui = (root) =>{
    if (root === null) return
    middigui(root.left);
    addNode(root);
    middigui(root.right);
  }
  let addNode = (node) => {
    temp.val = node.val
    temp.right = new TreeNode();
    temp = temp.right
  }
  middigui(root);
  temp;
  let result1 = result;
  while(result1 && result1.val !== undefined) {
    if (result1.right.val === undefined) {
      result1.right = null
    }
    result1 = result1.right
  }
  return result;

};

