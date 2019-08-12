/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    while(s.indexOf("  ") !== -1) {
      s = s.replace("  ", " ");
    }
    if (s[s.length-1] === " ") return 0
    let sArr = s.split(" ");
    if (sArr.length === 0) return 0;
    return sArr[sArr.length - 1].length
};
lengthOfLastWord("a ")

