/*
 * @lc app=leetcode.cn id=894 lang=javascript
 *
 * [894] 所有可能的满二叉树
 */
/**
 * Definition for a binary tree node.
 */
/**
 * @param {number} N
 * @return {TreeNode[]}
 */
 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }
var allPossibleFBT = function(N) {
    if (N === 1) {
      let node = new TreeNode(0);
      return [node]
    }
    let result = [];
    for (let i = 1; i< N ; i+=2) {
      let left = allPossibleFBT(i);
      let right = allPossibleFBT(N-1 - i)
      root.left = left;
      root.right = right;
      for(let i of left) {
        for (let j of right) {
          let root = new TreeNode(0);
          root.left = i;
          root.right = j;
          result.push(root)
        }
      }
    }
    return result;

};

let a = allPossibleFBT(7)
console.log(a)

