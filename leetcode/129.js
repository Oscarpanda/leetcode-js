
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

sumNumbers = function(root) {
    result = [];
    let digui = (root, arr) => {
        if (root === null) {
            return null
        }
        if (root.left === null && root.right === null) {
            copy = arr.slice(0);
            copy.push(root.val)
            result.push(copy)
            
        } else {

            copy = arr.slice(0);
            copy.push(root.val)
            digui(root.left, copy)
            copy = arr.slice(0);
            copy.push(root.val)
            digui(root.right, copy)
        }
    }
    digui(root, [])
    console.log(result)
    let sum = 0;
    result.forEach(element => {
        let si = parseInt(element.join(""))
        sum += si
        
    });
    return sum 
    console.log(sum) 


};
sumNumbers(root)