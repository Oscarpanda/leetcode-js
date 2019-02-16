var minAddToMakeValid = function(S) {
    
  let Sarr = S.split("");
  let stack = [];
  while (Sarr.length) {

    let temp = Sarr.shift()
    if (stack.length === 0) {
      stack.push(temp)
    }else {
    let peek = stack[stack.length - 1];
      if (peek === '(' && temp === ")")  {
        stack.pop()
      } else {
        stack.push(temp)
      }

    }
  }
  console.log(stack)
  return stack

};
minAddToMakeValid("())")