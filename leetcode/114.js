
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
var isCousins = function(root, x, y) {
    let temp = [root];
    while(temp.length) {
       let newArr = []; 
       let newArrVal = []; 
        for (let i = 0;i<temp.length;i++) {
            if (temp[i].left !== null) {
                newArr.push(temp[i].left)
                newArrVal.push(temp[i].left.val)
            }
            if (temp[i].right!== null) {
                newArr.push(temp[i].right)
                newArrVal.push(temp[i].right.val)
            }
            if (temp[i].left &&  temp[i].right && ((temp[i].left.val === y && temp[i].right.val === x) ||(temp[i].left.val === x && temp[i].right.val === y))) {
                return false
            }
        }
        
        let indexOfx = newArrVal.indexOf(x);
        let indexOfy = newArrVal.indexOf(y);
        if ((indexOfx + 1) * (indexOfy +1 ) === 0 && (indexOfx + 1) + (indexOfy +1 ) >0) {
            return false
        } else if ((indexOfx + 1) * (indexOfy +1 ) > 0 && (indexOfx + 1) + (indexOfy +1 ) >0) {
            return true
        }
        temp = newArr
    }
    
};
let re = isCousins(root,3, 6)
console.log(re);