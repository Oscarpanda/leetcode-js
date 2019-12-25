/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  if (s.length === 0 && p.length === 0) {
    return true
  }

  let firstMathch = s[0] === p[0] || (s[0] !== undefined && p[0] === '.');
  if (p.length >=2 && p[1] === "*") {
    return isMatch(s, p.substring(2, p.length)) || (firstMathch && isMatch(s.substring(1, s.length), p))
  } else {
    return firstMathch && isMatch(s.substring(1, s.length), p.substring(1, p.length))

  }
    
};
let a = isMatch("ab" , ".*c")
console.log(a)

