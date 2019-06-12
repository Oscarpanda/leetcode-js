/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    
    let sum = 0;
    let stack = [];
    while (ops.length > 0) {
        let temp = ops.shift();
        if (temp === "C"){
            sum -= stack.pop();
        } else if (temp === "D") {
            stack.push(stack[stack.length - 1] * 2);
            sum += stack[stack.length - 1];
        } else if (temp === "+") {
            let last = stack[stack.length - 1];
            let lastlast = stack.length - 2 >= 0 ? stack[stack.length - 2] : 0
            stack.push(last + lastlast);
            sum += stack[stack.length - 1];
        } else {
            stack.push(parseInt(temp))
            sum += stack[stack.length - 1];
        }
    }
    return sum
};

