/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    
  let result = false
  let digui = (root, sum) => {
    if (root === null) return ;
    if (root.left === null && root.right === null && root.sumV === sum) {
      result = true
    }
    // console.log(root.sumV)
    if (root.left !== null) {
      root.left.sumV = root.sumV+ root.left.val
      digui(root.left, sum)

    }
    if (root.right !== null) {

      root.right.sumV = root.sumV+ root.right.val
      digui(root.right, sum);
    }
    
  }
  if (root === null) return false
  root.sumV = root.val 

  digui(root, sum);
  if (result) {
    return true
  } else {
    return false
  }
  // return digui (root, sum)
};
 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }
 root = new TreeNode(5);
 root.left = new TreeNode(4)
 root.right = new TreeNode(8)
 root.right.right = new TreeNode(4)
 root.right.right.right = new TreeNode(1)
 root.right.left = new TreeNode(13)
 root.left.left = new TreeNode(11)
 root.left.left.left = new TreeNode(7)
 root.left.left.right= new TreeNode(2)
// hasPathSum(root, 22) 


