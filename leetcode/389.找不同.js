/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {

  for (let i = 0; i<s.length; i++) {
    let index = t.indexOf(s[i]);
    if (index !== -1) {
      let tArr = t.split("")
      tArr.splice(index, 1);
      t = tArr.join("")

    }

  }
  return t;


};
findTheDifference("abcd", "abcde")
