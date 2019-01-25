
 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }
 root = new TreeNode(1);
 root.left = new TreeNode(2)
 root.right = new TreeNode(5)
 root.right.right = new TreeNode(6)
 root.left.right = new TreeNode(4)
 root.left.left = new TreeNode(3)
 var flatten = function(root) {
  let result = []
  let digui = (root) =>  {
      if (root === null) {
          return null;
      }
      let right = root.right;
      root.right = digui(root.left);
      if (root.right) {
        root.right.right = digui(right)

      }
      root.left = null
      return root
  }
  digui(root)
  console.log(root)
  
};
flatten(root)