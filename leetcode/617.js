function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var mergeTrees = function(t1, t2) {
  let list1 = produceList(t1)
  let list2 = produceList(t2)
  console.log("list1", t1,list1)
  console.log("list2", t2,list2)
  if (list1.length > list2.length) {
      let list3 = [];
      
      list1.forEach((item, index) => {
          
          let list2num = null; 
          if (index > list2.length - 1) {
              list2num = null;
          } else {
              list2num = list2[index];
          }
          if (item === null && list2num === null){
              list3.push(null);
          } else if (item === null && list2num !== null) {
              list3.push(list2num);
          } else if (item !== null && list2num === null) {
              list3.push(item);
          } else {
              list3.push(item + list2num)
          }
          
      });
      return createTree(list3, 0);
      
  } else {
      let list3 = [];
      list2.forEach((item, index) => {
          
          let list1num = null; 
          if (index > list1.length - 1) {
              list1num = null;
          } else {
              list1num = list1[index];
          }
          if (item === null && list1num === null){
              list3.push(null);
          } else if (item === null && list1num !== null) {
              list3.push(list1num);
          } else if (item !== null && list1num === null) {
              list3.push(item);
          } else {
              list3.push(item + list1num)
          }
          
      });
      return createTree(list3, 0);
      
  }
  
};
var createTree = function (list , start)  {
  let root;
  if (list[start]===null) {
      return null
  } else {
    root  = new TreeNode(list[start])
  }
  let right = start * 2 +2;
  if (list[right] !== undefined) {
    root.right = createTree(list, right);
  } else {
    root.right = null;
  }
  let left = start * 2 + 1;
  if (list[left] !== undefined) {
    root.left = createTree(list, left);
  } else {
    root.left = null;
  }
  return root
  
}

var produceList = function (t1) {
  let stack = [t1];
  let list = [];
  let deep = Math.pow(2,maxDepth(t1));
  while(stack.length > 0 && list.length < deep) {
      let temp = stack.shift();
      if (temp !== null) {
        list.push(temp.val);
      } else {
        list.push(null);
      }
      if (temp === null ) {
          // TODO
          stack.push(null)
          stack.push(null)
      } else if (temp.left === null && temp.right === null) {
          stack.push(null)
          stack.push(null)
          // TODO
      } else if (temp.left !== null && temp.right === null) {
        stack.push(temp.left);
        stack.push(null)
          
      } else if  (temp.left === null && temp.right !== null) {
        stack.push(null);
        stack.push(temp.right);
      } else if (temp.left !== null && temp.right !== null)  {
        stack.push(temp.left);
        stack.push(temp.right);
      }
       
  }
  return list;
  
}
var maxDepth = function(root) {
  if (root === null) {
      return 0
  } else {
      let left = maxDepth(root.left)
      let right = maxDepth(root.right)
      return Math.max(left, right) + 1

  }
};
var t1 = createTree([3,4,5,1,2,null,null,0],0);
console.log(t1);
var t2 = createTree([4,1,2],0);
console.log(t2)
console.log(mergeTrees(t1,t2));