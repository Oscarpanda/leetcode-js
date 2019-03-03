var simplifyPath = function(path) {
  while(path.indexOf("//") !== -1) {
    path = path.replace(/\/\//, "/");
  }
  let pathArr = path.split("/")
  let stack = [];
  for (let i = 0; i< pathArr.length;i ++) {
    if (pathArr[i] === ".") {
      // null
    } else if (pathArr[i] === "..") {
      stack.pop();
    } else {
      stack.push(pathArr[i])
    }
  }
  console.log(stack)
  if (stack.length > 1 &&  stack[stack.length - 1] === "") {
    stack.pop();
  }
  if (stack[0] !== "") {
    stack.unshift("")
  }
  let result = stack.join("/")
  if (result === "") {
    return "/"
  }
  return result

    
};
simplifyPath("/../")
// simplifyPath("/a//b////c/d//././/..")