
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
        let right = digui(root.right);
        let left = digui(root.left);
        if (left) {
          root.right = left;
          root.left = null
          let copy = root;
          while (root.right) {
              copy =copy.right;
          }
          copy.right = right
        } else {
        }
        return root
    }
    digui(root)
  console.log(root)
  
};
flatten(root)