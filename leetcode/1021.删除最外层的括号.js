/*
 * @lc app=leetcode.cn id=1021 lang=javascript
 *
 * [1021] 删除最外层的括号
 */
/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
  let result = "";
  let counter = 0
  for (let i = 0 ; i < S.length; i++) {
    if ((counter === 0 && S[i] === "(") || (counter === 1 && S[i] === ")")) {
    } else {
      result += S[i]
    }
    if (S[i] === "(") {
      counter +=1
    }
    if (S[i] === ")") {
      counter -=1
    }
  }
  return result;
    
};
// removeOuterParentheses("(()())(())") 

